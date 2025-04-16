
const convertToMinuteCount = (slot) => {
    const splits = slot.split(":");
    if (splits.length != 2) {
      throw new Error("Invalid time");
    }
    return Number(splits[0]) * 60 + Number(splits[1]);
  };
  
  class BookingSystem {
    startTimes;
    endTimes;
  
    constructor() {
      this.startTimes = [];
      this.endTimes = [];
    }
  
    validateStart(start) {
      let position = -1;
      const startTimes = this.startTimes;
      for (let i = 0; i < startTimes.length; i++) {
        if (startTimes[i] > start) {
          break;
        }
        position = i;
      }
      const endTimeForPreviousSlot = this.endTimes[position];
      if (endTimeForPreviousSlot > start) {
        throw new Error("Invalid request");
      }
      return position;
    }
    validateEnd(end) {
      let position = -1;
      const endTimes = this.endTimes;
      for (let i = 0; i < endTimes.length; i++) {
        if (endTimes[i] > end) {
          position = i;
          break;
        }
      }
      const startTimeOfPrevSlot = this.startTimes[position];
      if (startTimeOfPrevSlot < end) {
        throw new Error("Invalid request");
      }
      return position;
    }
  
    bookSlot(start, end) {
      // requestTime: 10:00
      try {
        const startCount = convertToMinuteCount(start);
        const endCount = convertToMinuteCount(end);
  
        const startPosition = this.validateStart(startCount);
        const endPosition = this.validateEnd(endCount);
  
        if (startPosition + 1 != endPosition) {
          throw new Error("Something went wrong");
        }
  
        return {
          start,
          end,
          status: true,
        };
      } catch (error) {
        return {
          start,
          end,
          status: false,
        };
      }
    }
  }
  
  module.exports = BookingSystem;