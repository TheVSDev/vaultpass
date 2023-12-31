// Imports
import Link from "next/link"

import HeadPage from "@/web/components/HeadPage"
import Main from "@/web/components/Main"
import Sidebar from "@/web/components/Sidebar"
import Button from "@/web/components/Button"
import DescriptionParagraph from "@/web/components/DescriptionParagraph"
import ListContainer from "@/web/components/ListContainer"

// CreditCards function
const CreditCards = () => {
    return (
        <>
            <HeadPage />
            <Main>
                <Sidebar />
                <br />
                <Link href="/formPages/creditCardForm"><Button btnLabel="Add credit card" /></Link>
                <DescriptionParagraph>Save your credit card information to pay quickly and without rewritting over and over again.</DescriptionParagraph>
                <ListContainer></ListContainer>
            </Main>
        </>
    )
}

export default CreditCards