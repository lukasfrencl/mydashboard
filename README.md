# myDashboard (React + TypeScript + Vite)

This is an app that allows you to have a configurable dashboard. The app is still in development, but now supports these widgets:
- current time anywhere in the world
- current weather anywhere in the world + forecast detail (OpenWeather API)
- current price of any cryptocurrency (CoinGecko API)
- graph of price history of any cryptocurrency (CoinGecko API)

To get the application running, you need to copy the `.env.default` file to the `.env` file and add the API keys.
Both OpenWeather and CoinGecko have a free plan option, and this application uses only those API endpoints that are part of the free plan.

To start the application, use the `npm run dev` command.

If you want to change the dashboard configuration, just edit the `src/config.ts` file.
