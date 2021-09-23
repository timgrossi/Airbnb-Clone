import React from 'react'

function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                    <p>How Airbnb Works</p>
                    <p>Newsroom</p>
                    <p>Investors</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb Luxe</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">COMMUNITY</h5>
                    <p>10 Must See Locations</p>
                    <p>Best rated homes</p>
                    <p>Best of the Best</p>
                    <p>Airbnb Rewards</p>
                    <p>Airbnb Love it</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">HOST</h5>
                    <p>Am I qualified?</p>
                    <p>How to get started?</p>
                    <p>Is it safe?</p>
                    <p>Airbnb Homes</p>
                    <p>Airbnb Example</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">SUPPORT</h5>
                    <p>How Airbnb Works</p>
                    <p>Customer Service</p>
                    <p>Chat</p>
                    <p>Contact Info</p>
                    <p>Founder</p>
            </div>
            
        </div>
    )
}

export default Footer
