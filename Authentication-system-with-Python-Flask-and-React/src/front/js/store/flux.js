const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
<<<<<<< HEAD
      token: null,

=======
      tokenLS: null,
>>>>>>> 47608402feba4e1aaf8420f1a6d305d301196389
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
<<<<<<< HEAD
      guardar_token: (token) => {
        setStore({ token: token });
        sessionStorage.setItem("token", token);
      },
      borrar_token: () => {
        setStore({ token: null });
        sessionStorage.removeItem("token");
      },

      // Use getActions to call a function within a fuction
=======
>>>>>>> 47608402feba4e1aaf8420f1a6d305d301196389
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
<<<<<<< HEAD
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
=======
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
>>>>>>> 47608402feba4e1aaf8420f1a6d305d301196389
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
<<<<<<< HEAD
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
=======
        const store = getStore();
>>>>>>> 47608402feba4e1aaf8420f1a6d305d301196389
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });
<<<<<<< HEAD

        //reset the global store
        setStore({ demo: demo });
      },
=======
        setStore({ demo: demo });
      },

      createUser: async (email, password) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          });
          const data = await resp.text();

          if (resp.status == 404) {
            return false;
          }
          if (resp.status == 200) {
            return true;
          }
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      login: async (email, password) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await resp.json();
          if (resp.status === 200) {
            localStorage.setItem("token", data.token);
            setStore({ tokenLS: data.token });
            return true;
          } else {
            return false;
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      deleteTokenLS: () => {
        setStore({ tokenLS: null });
      },
>>>>>>> 47608402feba4e1aaf8420f1a6d305d301196389
    },
  };
};

<<<<<<< HEAD
export default getState;
=======
export default getState;
>>>>>>> 47608402feba4e1aaf8420f1a6d305d301196389
