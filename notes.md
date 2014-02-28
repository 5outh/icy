#### Server: Haskell (`http-server`, hopefully)

Needs:

* State:
	* Map
	* Player Location
	* Last update (time)
	* Frequency distribution of commands (which one gets executed?)
* Random map generation
	* Modified random walk, placing non-ice tiles as needed
	* Keep track of max x, y and min x, y for bounds
* Game update semantics
	* Process commands
* Timer tracking last update
* Ability to recieve POST requests (JSON, containing commands)
* Ability to recieve GET requests and respond to them (JSON, containing updated game state)

#### Clients: Elm + Javascript

Needs:

* State
	* Map
	* Player Location
	* (Possibly) Command frequency distribution
* Timer (need to send GET for updated state periodically)
* Tweening code, animations, etc.
* Ability to update HTML on the fly
* Ability to send POST requests to Haskell server (JSON, containing commands)
* Ability to send GET requests to Haskell server (Requesting game state changes)