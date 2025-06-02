import { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const socket = io("http://localhost:3001");

const LiveUsers = () => {
  const [socketUsers, setSocketUsers] = useState(0);

  useEffect(() => {
    socket.on("users", (count) => {
      if (count > socketUsers && socketUsers !== 0) {
        // User joined
        toast.success(`🎉 A new user joined! 👥 ${count} users online`, {
          position: "top-right",
          autoClose: 4000,
        });
      } else if (count < socketUsers) {
        // User left
        toast.warn(`👋 A user left. 👥 ${count} users online`, {
          position: "top-right",
          autoClose: 4000,
        });
      }
      // if count === socketUsers, no toast

      setSocketUsers(count);
    });

    return () => {
      socket.off("users");
    };
  }, [socketUsers]);

  return <ToastContainer position="top-right" />;
};

export default LiveUsers;
