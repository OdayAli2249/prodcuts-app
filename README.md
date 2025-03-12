# PRODUCTS APP: React Native E-Commerce App

This is a simple e-commerce app built with React Native and Expo, featuring product listing, cart management, and order confirmation.

## Features
- 📦 **Product Listing**: Fetch products from an API and display them in a list.
- 🛒 **Cart Management**: Add, remove, and update cart items.
- 📑 **Order Summary**: View a bottom sheet summary of the total order.
- 🔄 **Pull-to-Refresh**: Refresh the product list.
- ⚡ **Optimized Performance**: Uses React Query for efficient data fetching.

## Tech Stack
- **React Native**
- **Expo**
- **React Query**
- **Axios**
- **React Navigation**
- **TypeScript**

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/OdayAli2249/prodcuts-app.git
   cd your-repo-name
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npx expo start
   ```

## API Integration
- Uses `useApiCall` hook to fetch products from `/products`.
- Cart state is managed via `CartContext`.

## Building APK
To generate an APK for Android:
```sh
npx eas build -p android --profile preview
```
For a production build (AAB):
```sh
npx eas build -p android --profile production
```

## Running on a Device
- Use Expo Go for quick testing.
- Scan the QR code displayed after running `npx expo start`.
