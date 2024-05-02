function changeTheme()
{
    const themeSelector = document.getElementById("themeSelector");
    const body = document.body;
    const logo = document.getElementById("byui-logo");

    const selectedTheme = themeSelector.value;

    if (selectedTheme == "dark")
    {
        body.classList.add("dark");
        logo.src = "byui-logo_white.png";
    }
    else
    {
        body.classList.remove("dark");
        logo.src = "byui-logo_blue.webp";
    }
}

themeSelector.addEventListener("change", changeTheme);