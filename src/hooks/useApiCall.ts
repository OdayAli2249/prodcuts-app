import { useQuery } from "@tanstack/react-query";
import { AxiosService } from "../services/AxiosServce";
import { AxiosError } from "axios";
import { UseApiCallOptions } from "../types";

const useApiCall = <R = any>({
    key,
    url,
}: UseApiCallOptions) => {

    const fetcher = async <R = any>() => {
        const res = await AxiosService.getInstance().request<R>({ url });
        return res.data;
    };

    return useQuery<R, AxiosError<R>>({
        queryKey: [key],
        queryFn: fetcher
    }
    );
};

export default useApiCall;
