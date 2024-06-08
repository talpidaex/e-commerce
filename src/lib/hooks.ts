import { useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, AppStore } from "./store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppStore>();
export const useAppStore = useStore.withTypes<AppStore>();
