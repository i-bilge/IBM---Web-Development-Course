# Objectives
    Understand what Geolocation API is.
    How Geolocation API identifies the current location.
    Find your current location.
    See your current location on the map.
    How far is the Statue of Liberty?

# What is Geolocation API?
    HTML5 has many cool APIs. One of it is Geolocation. Using this API(Application Programming Interface) a web developer can find the location by writing just a few lines of code.
    If a web browser can find out it's current location, it would be of great utility in many scenarios. For example, when you order food online, the food delivery company expects you to type in your address. If your browser can identify your current location, you can automatically find it out and key in the current location.

# How Geolocation API identifies the current location.
Usually Geolocation API will try to determine the position using one of these methods:
## GPS (Global Positioning System)
    If your device has any GPS capabilities, the current position is identified using the satellite signal.
## Mobile Network Location
    If you are browsing the internet using a mobile phone or a wireless modem, your location is tracked using the location of the nearest cell phone towers.
## WiFi Positioning System
    If you are using a WiFi, then the Wi-Fi positioning system is used.
## IP Address Location
    If none of the above is a possibility, location is detected based on the nearest Public IP Address. The accuracy of IP based location may not be very accurate. It can be used to identify the city, region or country.
