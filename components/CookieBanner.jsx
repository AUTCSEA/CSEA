'use client'
import { getLocalStorage, setLocalStorage } from '@utils/storageHelper'
import { useState, useEffect } from 'react'

export default function CookieBanner() {
    const [cookieConsent, setCookieConsent] = useState(false)

    useEffect(() => {
        const storedCookieConsent = getLocalStorage('cookie_consent', null)

        setCookieConsent(storedCookieConsent)
    }, [setCookieConsent])

    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied'

        if (typeof window.gtag !== 'undefined') {
            window.gtag('consent', 'update', {
                analytics_storage: newValue,
            })
        }

        setLocalStorage('cookie_consent', cookieConsent)
    }, [cookieConsent])
    return (
        <div
            className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        ${
                            cookieConsent != null ? 'hidden' : 'flex'
                        } px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-white rounded-lg shadow`}
        >
            <div className="text-center">
                <p>
                    We use <span className="font-bold text-orange-500">cookies</span> on our site.
                </p>
            </div>

            <div className="flex gap-2">
                <button
                    className="px-5 py-2 text-gray-500 rounded-md border-gray-900"
                    onClick={() => setCookieConsent(false)}
                >
                    Decline
                </button>
                <button className="bg-gray-900 px-5 py-2 text-white rounded-lg" onClick={() => setCookieConsent(true)}>
                    Allow Cookies
                </button>
            </div>
        </div>
    )
}
