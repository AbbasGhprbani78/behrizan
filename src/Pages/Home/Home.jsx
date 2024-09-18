import React, { useEffect, useState } from 'react'
import './Home.css'
import Section1 from '../../Components/templates/Home/Section1/Section1'
import Section2 from '../../Components/templates/Home/Section2/Section2'
import Section3 from '../../Components/templates/Home/Section3/Section3'
import Section4 from '../../Components/templates/Home/Section4/Section4'
import Section5 from '../../Components/templates/Home/Section5/Section5'
import Section6 from '../../Components/templates/Home/Section6/Section6'
import axios from 'axios'
import { IP } from '../../App'
import { useMyContext } from '../../context/langugaeContext'
import Header from '../../Components/modules/Header/Header'
import Footer from '../../Components/modules/Footer/Footer'

export default function Home() {
    const [dataHome, setDataHome] = useState("")
    const { language } = useMyContext()

    useEffect(() => {
        const getInfoPage = async () => {
            const headers = {
                'Accept-Language': language
            };

            try {
                const response = await axios.get(`${IP}/home/get-home-media/`, {
                    headers,
                })

                if (response.status === 200) {
                    setDataHome(response.data[0])

                }

            } catch (e) {
                console.log(e)
            }
        }
        getInfoPage()
    }, [language])

    return (
        <>
            <Header />
            <div className="main-content">
                <Section1 dataHome={dataHome} />
                <Section2 dataHome={dataHome} />
                <Section3 dataHome={dataHome} />
                <Section4 dataHome={dataHome} />
                <Section5 dataHome={dataHome} />
                <Section6 dataHome={dataHome} />
            </div>
            <Footer />
        </>
    )
}

// user/signup