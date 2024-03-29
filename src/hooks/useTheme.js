const useTheme = (theme) => {
    if (theme === "dark") {
        //add class=dark in html element
        document.documentElement.classList.add("dark");
        document.documentElement.classList.add("text-white");
    } else {
        //remove class=dark in html element
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.remove("text-white");
    }

    if (theme === "dark") {
        theme = "light";
    } else {
        theme = "dark";
    }

}

export default useTheme;