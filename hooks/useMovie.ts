import useSwr from "swr";
import fetcher from "@/libs/fetcher";

const useMovie = (id?: string) => {
	const { data, error, isLoading } = useSwr(
		id ? `/api/movies/${id}` : null,
		fetcher,
		{
			revalidateIfStale: false,
			revalidateOnFocus: false,
			revalidateOnReconnect: false,
		}
	);
	return {
		data,
		error,
		isLoading,
	};
};

export default useMovie;
