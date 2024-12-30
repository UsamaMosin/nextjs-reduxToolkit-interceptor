'use client'
import { onSignInSuccess, onSignOutSuccess } from "@/store/features/auth/sessionSlice";
import { setUser, userLoggedOut } from "@/store/features/auth/userSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  const login = () => {
    dispatch(onSignInSuccess('token comes from api'));
    dispatch(setUser({
      avatar: "apiAvatar",
      userName: "apiUserName",
      email: "apiEmail",
      userId: 123
    }))
  }

  const logout = () => {
    dispatch(onSignOutSuccess());
    dispatch(userLoggedOut());
  }

  return (
    <div className="flex h-screen gap-5 justify-center items-center">
      <button className="bg-blue-100 w-20 h-10 border shadow-lg" onClick={login}>
        Login
      </button>
      <button className="bg-red-100 w-20 h-10 border shadow-lg" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
