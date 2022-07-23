import Styled from 'styled-components';

export const Style = Styled.div `

.main {
    width: 100%;
    max-height: max-content;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 13rem;
    padding-bottom: 0.8rem;
    padding-top: 0.6rem;
}

.section-logo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 1.5rem;
    gap: 0.2rem;
}

h1 {
    font-size: 1.8rem;
}

.menu {
    max-width: max-content;
    max-height: max-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 3.5rem;
}

.nav-link, .nav-link-login {
    color: #172026;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.5s;
}
.nav-link:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.1);
    color: #FFB30D;
}

.nav-link-login {
    background-color: #FFB30D;
    padding 0.2rem 0.4rem;
    border-radius: 0.5rem;
    text-align: center;
}
.nav-link-login:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.1);
}
`;