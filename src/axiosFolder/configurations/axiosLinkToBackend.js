let cache = null;

const environment = import.meta.env.VITE_APP_ENVIRONMENT || "development";

const config = () => {
    if (!cache) {
        cache = Object.freeze({
            secrets: {
                apiHost:
                    environment === "development"
                        ? "http://localhost:3000/"
                        : "http://localhost:3000/"
            },
        });
    }
    return cache;
};

export default config;

// https://royal-blogs-tia.vercel.app/
//"http://localhost:3000/"
// "https://royal-blogs-tia-backend.onrender.com/"
