import { useSnackbar } from "notistack";

export const useEnqueueSnackbar = () => {
	const { enqueueSnackbar } = useSnackbar();
	return {
		enqueueSnackbarError: (message: string) => enqueueSnackbar(
			message,
			{
				variant: "error",
			},
		),
		enqueueSnackbarSuccess: (message: string) => enqueueSnackbar(
			message,
			{
				variant: "success",
			},
		),
		enqueueSnackbarWarning: (message: string) => enqueueSnackbar(
			message,
			{
				variant: "warning",
			},
		),
		enqueueSnackbarInfo: (message: string) => enqueueSnackbar(
			message,
			{
				variant: "info",
			},
		),
	};
};
