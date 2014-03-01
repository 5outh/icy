Elm.Client = Elm.Client || {};
Elm.Client.make = function (_elm) {
   _elm.Client = _elm.Client || {};
   if (_elm.Client.values)
   return _elm.Client.values;
   var _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _E = _N.Error.make(_elm),
   _J = _N.JavaScript.make(_elm),
   $moduleName = "Client";
   var Basics = Elm.Basics.make(_elm);
   var Color = Elm.Color.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Input = Elm.Graphics.Input.make(_elm);
   var List = Elm.List.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Mouse = Elm.Mouse.make(_elm);
   var Native = Native || {};
   Native.Ports = Elm.Native.Ports.make(_elm);
   var Prelude = Elm.Prelude.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var String = Elm.String.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Time = Elm.Time.make(_elm);
   var _op = {};
   var inState = Native.Ports.portIn("inState",
   Native.Ports.incomingSignal(function (v) {
      return typeof v === "object" && "p_x" in v && "p_y" in v ? {_: {}
                                                                 ,p_x: typeof v.p_x === "number" ? _J.toInt(v.p_x) : _E.raise("invalid input, expecting JSNumber but got " + v.p_x)
                                                                 ,p_y: typeof v.p_y === "number" ? _J.toInt(v.p_y) : _E.raise("invalid input, expecting JSNumber but got " + v.p_y)} : _E.raise("invalid input, expecting JSObject [\"p_x\",\"p_y\"] but got " + v);
   }));
   var $ = Graphics.Input.field("Type a command here"),
   field = $._0,
   cmd = $._1;
   var command = Native.Ports.portOut("command",
   Native.Ports.outgoingSignal(function (v) {
      return _J.fromString(v);
   }),
   cmd);
   var main = A2(Signal.lift,
   Text.asText,
   cmd);
   var IcyState = function (a) {
      return {_: {},p_pos: a};
   };
   _elm.Client.values = {_op: _op
                        ,main: main
                        ,cmd: cmd
                        ,field: field
                        ,IcyState: IcyState};
   return _elm.Client.values;
};