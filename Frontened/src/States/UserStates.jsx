
export const signUp = async (inputs, setError, setAuthUser) => {
    const { fullname, username, password, confirmpassword, gender } = inputs;

    if (password !== confirmpassword) {
        setError("Passwords do not match");
        return;
    }

    if (password.length < 8) {
        setError("Password length should be at least 8 characters");
        return;
    }

    if (gender === "") {
        setError("Please select gender");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullname, username, password, gender })
        });

        const data = await response.json();

        if (data.error) {
            setError(data.error);
            throw new Error(data.error)
        }

        localStorage.setItem("user", data);
        setAuthUser(data)
    } catch (error) {
        setError("An error occurred while signing up");
    }
};

export const logIn = async (inputs, setError, setAuthUser) => {
    const { username, password } = inputs;

    try {
        const response = await fetch("http://localhost:5000/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (data.error) {
            setError(data.error);
            throw new Error(data.error)
        }
        localStorage.setItem("user", data)
        setAuthUser(data);
    } catch (error) {
        setError("An error occurred while logging in");
    }
};

export const logOut = async(setAuthUser) => {
    try {
        const response = await fetch("http://localhost:5000/auth/logout", {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        });
        

        const data = await response.json();

        if (data.error)
            throw new Error(data.error)
        
        localStorage.removeItem("user");
        setAuthUser("");

    } catch (error) {
        console.log(error);
    }
}