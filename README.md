# YouTube Clone using React and Tailwind CSS

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

###### Clone the repository:

```bash
git clone https://github.com/snehalk19/Youtube.git
cd Youtube
```

###### Install dependencies:

```bash
npm install
```

###### Add GOOGLE_API_KEY:

```bash
Navigate to "src/utils/constants.js"
Add GOGGLE_API_KEY
```

###### Run the app:

```bash
npm run start
```

Implemented following concepts:

1. Implemented Debouncing
   typing slow = 200ms typing fast = 30ms

   Perfomance:

   iphone pro max = 14 letter _ 1000 = 140000
   with debouncing= 3 API calls _ 1000 = 3000
   Debouncing with 200ms

   if difference between 2 key strokes is <200ms - DECLINE API call
   200ms make an API call

   Cache: time complexity to search in array = O(n) time complexity to search in Object = O(1)

2. Live Chat
3. Nested Comments
