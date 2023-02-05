import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Inter', sans-serif;
    }

    :root{
        --color-primary: #27AE60;
        --colocr-primary-50: #93D7AF;
        --color-secondary: #EB5757;
        --grey-100: #333333;
        --grey-50: #828282;
        --grey-20: #E0E0E0;
        --grey-0: #F5F5F5;
    }

    button{
        border-radius: 8px;
        cursor: pointer;
        font-family: 'Inter', sans-serif;
        border: 2px solid;
    }

    input{
        background: #FFFFFF;
        border: 2px solid var(--grey-20);
        border-radius: 8px;
        outline: none;
        font-family: 'Inter', sans-serif;
    }
    input::placeholder{
        color: var(--grey-50);
    }
    input:focus{
        border: 2px solid #333333;
    }

    .search{
        display: flex;

        justify-content: space-between;
        align-items: center;

        margin: 2.5rem 0;

        p{
            font-size: 1.2rem;
            color: var(--grey-100);
            font-weight: 700;

            span{
                color: var(--grey-50);
            }
        }
        
        button {
            padding: 10px 20px;

            background-color: var(--color-primary);
            border: 2px solid var(--color-primary);
            color: #fff;

            font-size: 0.875rem;
            align-self: flex-start;
            margin-left: 1rem;
        }
        button:hover {
            background-color: var(--colocr-primary-50);
            border: 2px solid var(--color-primary-50);
        }
    }
    .container{
        display: flex;
        flex-direction: column;

        margin: 0 1rem;
    }

    @media(min-width: 769px){
        .container-infos{
            display: flex;
            flex-direction: row;
            margin: 3.25rem 115px;

            gap: 2rem;

            justify-content: space-between;
        }
        .search{
            margin: 30px 115px 0 115px;
        }
    }
    
`;
