export default function GuestLayout(props) {
    return (
        <>
        <h1>Moodyze</h1>
        <div id="GuestLayout">
            <img className="imgs" src="https://www.svgheart.com/wp-content/uploads/2020/06/hand-drawn-sun-smiley-face-free-svg-file.png" alt="Moodyze Guest Pic"></img>
            <div className="borderedText">
                <p>
                    <strong>Moodyze</strong> is a unique and intuitive app designed to help you track your mood throughout the day.
                    With Moodyze, you can easily log your feelings, make notes, and assign a color that best
                    represents your current mood. Whether you're feeling happy, sad, excited, or anything in between,
                    Moodyze provides a simple and effective way to keep track of your emotional well-being. By using Moodyze,
                    you can gain insights into your mood patterns over time, helping you understand the factors that
                    influence your emotions. This app is perfect for anyone looking to improve their mental health, increase self-awareness,
                    and develop healthier emotional habits.
                </p>
            </div>
        </div>
        <h3>In order to use our app <a onClick={props.showLoginForm}>login</a> or <a onClick={props.showRegisterForm}>sign in</a></h3>
        </>
    )
}