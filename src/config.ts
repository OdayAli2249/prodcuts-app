import { DefaultOptions, QueryClient } from "@tanstack/react-query";

export const queryConfig = {
    queries: {
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 1000 * 30
    },
} satisfies DefaultOptions;

export const queryClient = new QueryClient({
    defaultOptions: queryConfig,
});

export const config = {
    apiBaseUrl: "https://www.freetestapi.com/api/v1",
};
