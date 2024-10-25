function Home() {
    return(
        <div className="home">
            <h1>Jest to strona do wyszukiwania przestepcow ze wzgledu na ich kolor skory</h1>
            <p>Wykorzystywane api to : <a href="https://www.fbi.gov/wanted/api" target="_blank">FBI WANTED</a></p>
            <p>Wykorzystany zostalo równiez <a href="https://reactrouter.com/en/main" target="_blank">REACT ROUTER</a></p>
            <p>Jak korzystać ze strony?</p>
            <ol>
                <li>Na pasku nawigacji wybieramy wanteds</li>
                <li>Wyświetlą nam sie wszyscy poszukiwani, jesli chcemy wyszukac za pomoca koloru skory wybieramy z listy rozwijanej i klikamy szukaj</li>
                <li>Jeśli chcemy widzieć wiecej informacji na temat poszukiwanego wystarczy kliknąć w tytuł.</li>
            </ol>
        </div>
    )
}
export default Home;