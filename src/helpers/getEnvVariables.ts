export const getEnvVariables = () => {
    return {
        VITE_WEATHER_API_URL: import.meta.env.VITE_WEATHER_API_URL,
    }
}