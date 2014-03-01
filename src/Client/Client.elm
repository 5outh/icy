module Client where 

import Mouse
import String
import Graphics.Input as Input

type IcyState = { p_pos : (Int, Int) } -- etc

main = lift2 above field (lift plainText cmd)

(field, cmd) = Input.field "Type a command here"

-- sends out a command
port command : Signal String
port command = cmd

-- import inState from JS
-- This will be a JS object!
-- For now, just get the player location or whatever.
-- port inState : Signal { p_x : Int, p_y : Int }