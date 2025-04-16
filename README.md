# Booking Slot Validation API

This is a simple Express.js API that validates booking slots based on predefined rules.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/GauravDubey56/dummy-booking-system

```

2. Install dependencies:
```bash
npm install
```

## Running the Server

To start the server, run:
```bash
npm start
```

The server will start on port 8000.

## API Endpoints

### Validate Slot
- **Endpoint**: `/validateSlot`
- **Method**: POST
- **Description**: Validates if a booking slot is available and meets the criteria

## Test Cases

Here are some example curl commands to test the API:

### Valid Slot Request
```bash
curl -X POST http://localhost:8000/validateSlot \
-H "Content-Type: application/json" \
-d '{
  "start": "10:00",
  "end": "11:00"
}'
```

### Valid slot
```bash
curl -X POST http://localhost:8000/validateSlot \
-H "Content-Type: application/json" \
-d '{
  "start": "09:00",
  "end": "09:30"
}'
```

### Invalid/Booked slot
```bash
curl -X POST http://localhost:8000/validateSlot \
-H "Content-Type: application/json" \
-d '{
  "start": "10:30",
  "end": "11:30"
}'

## Response Format

The API will return responses in the following format:

### Success Response
```json
{
  "message": "Slot is valid and available"
}
```

### Error Response
```json
{
  "message": "Error message describing the issue"
}
```

## Error Codes

- 400: Bad Request (Invalid input) or (Slot already booked)
- 500: Internal Server Error 