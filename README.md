# beehacks

## Inspiration
Our hackathon theme was related to environmentalism. One of our team members has a relative who is a beekeeper, and he had recently researched ways to help his relative keep track of the health of their beehives. He realized the most common method of keeping track of a beehives health, eyeball estimation of activity levels found outside a hive, was not an effective method as it is prone to human error (especially for beginner beekeepers). There were very few tech products for sale that attempted to rectify these issues. These products were too expensive to be a reasonable solution for any beekeeper who was a professional with multiple hives, and not just a hobbyist. Our team felt we could develop a cheaper solution with a more tech friendly user interface that would appeal to a larger market of beekeepers.  


## What it does

We have constructed a Beehive monitoring system, which logs and tracks the fluctuating population of forager bees within a beehive. Forager bees perform important out-colony tasks, like pollen collection, which plays a crucial role in honey production. Having a consistent number, or growing number, of forager bees is one indicator of a healthy hive. Currently, bee keepers resort to counting the amount of forager bees through eyeball estimation of activity levels found outside a hive. This is an inefficient method for capturing a declining hive early enough to save it.
 
Beekeepers tend to be frugal when it comes to purchasing supplies for their bees. A beekeeper usually has numerous amounts of hives under their care, requiring them to purchase supplies for each one significantly increases their costs. Our team wanted to develop a solution that not only was an efficient monitoring system with a friendly user interface, but also a system that was cheap enough to duplicate on a larger scale. Having the possibility of a higher acceptance rate among the bee keeping community and halting the ongoing decline bees around the world are facing today, was a welcomed consequence our project could produce upon further development.
 
Analytics is vital, our system ties together bee counting, temperature tracking, and data interpretation. We wanted our device to help the beekeeper concentrate on what they love - care for bees, rather than tediously tracking data and trying to make sense of it. Our device is a proof of concept that maintains the potential for future expandability in a user-friendly manner while maintaining the initial low costs for beekeepers.  

## How we built it
We used a DragonBoard 410c, and uploaded Arduino scripts to it. The DragonBoard has two infrared sensors connected to it. Those sensors collected data, which was then streamed through a queuing service ( RabbitMQ ), and then handled through Socket io. 

## FAQ

<b>How can your device know the difference between a bee exiting a hive compared to a bee entering a hive?</b>

We have two infrared sensors, let us call them “sensor 1” and “sensor 2”. Our device becomes the only entrance/exit solution the bees have to access their hive. Inside our unit, sensor 1 is placed behind of sensor 2. 

* If sensor 1 registers movement and then sensor 2 registers movement – that equals one bee “Exit” from the hive. 

* If sensor 2 registers movement and then sensor 1 registers movement – that equals one bee “Entrance” to the hive.

