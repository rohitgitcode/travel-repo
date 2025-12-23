# Travel DE - Travel Planning Web Application

A modern, colorful, and user-friendly web application for planning your perfect trip. Find destinations, discover travel agencies within your budget, and access all the information you need for a comfortable journey.

## Features

- 🔍 **Place Search**: Search for destinations by name, country, or description
- 🎯 **Smart Quiz**: Take a personalized quiz to get destination recommendations based on your preferences
- 💰 **Budget Filtering**: Filter travel agencies by your maximum budget
- ⭐ **Agency Reviews**: View detailed reviews and ratings for each travel agency
- 📞 **Contact Information**: Access phone numbers, email addresses, and Instagram accounts
- 🌈 **Beautiful UI**: Colorful, modern, and attractive user interface

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
Travel-DE/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Home.js              # Landing page
│   │   ├── PlaceSearch.js       # Place search functionality
│   │   ├── Quiz.js              # Destination recommendation quiz
│   │   ├── TravelAgencies.js    # Agency listing with budget filter
│   │   └── AgencyDetails.js    # Detailed agency information
│   ├── data/
│   │   ├── placesData.js        # Destination data
│   │   └── travelAgenciesData.js # Travel agency data
│   ├── App.js                   # Main app component with routing
│   └── index.js                 # Entry point
└── package.json
```

## Usage

1. **Home Page**: Choose to search for places or take a quiz
2. **Search Places**: Enter a destination name to find travel agencies
3. **Take Quiz**: Answer questions to get personalized destination suggestions
4. **View Agencies**: Browse travel agencies for your selected destination
5. **Filter by Budget**: Enter your maximum budget to see matching agencies
6. **View Details**: Click on any agency to see full details, reviews, and contact information

## Technologies Used

- React 18.2.0
- React Router DOM 6.20.0
- CSS3 with modern gradients and animations
- Google Fonts (Poppins)

## Features in Detail

### Place Search
- Real-time search filtering
- Popular destinations showcase
- Detailed place information with tags and ratings

### Smart Quiz
- 5-question preference quiz
- Intelligent matching algorithm
- Personalized destination recommendations with match scores

### Travel Agencies
- Budget-based filtering
- Comprehensive agency information
- Review previews
- Direct navigation to detailed views

### Agency Details
- Complete contact information
- Customer reviews and ratings
- Available destinations
- Direct action buttons (Call, Email, Instagram)

## Customization

You can easily customize the application by:
- Adding more destinations in `src/data/placesData.js`
- Adding more travel agencies in `src/data/travelAgenciesData.js`
- Modifying styles in component CSS files
- Adjusting the quiz algorithm in `src/components/Quiz.js`

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## License

This project is open source and available for personal and commercial use.


