# Sliders

Sliders are unidimensional widgets that output one value at a time.


----

## Fader
```js
{
    type:'fader',
    // etc
}
```

#### `horizontal`
- type: `boolean`
- default: `false`
- usage: set to `true` to display the fader horizontally

#### `align`
- type: `string`
- default: `center`
- usage: set to `left` or `right` to display one scale instead of two

#### `noPip`
- type: `boolean`
- default: `false`
- usage: set to `true` to hide the scale

#### `range`
- type: `object`
- default: `{"min":0,"max":1}`
- usage: `range` defines the breakpoints of the fader's scale
    - keys can be percentages and/or `min` / `max`
    - values can be `number` or `object` if a custom label is needed
- example:
```js
range: {
    "min":0,
    "50%":1,        
    "max": {"inf":10} // "inf" will be used as a custom label on the scale
}
```
#### `horizontal`
- type: `boolean`
- default: `false`
- usage: set to `true` to display the fader horizontally

#### `logScale`
- type: `boolean`
- default: `false`
- usage: set to `true` use logarithmic scaling between breakpoints (log10)


#### `unit`
- type: `string`
- default: `empty`
- usage: `unit` will be appended to the displayed widget's value (it doesn't affect osc messages)


#### `snap`
- type: `boolean`
- default: `false`
- usage: by default, dragging the widget will modify it's value starting from its last value. Setting this to `true` will make it snap directly to the mouse/touch position.


#### `meter`
- type: `boolean`
- default: `false`
- usage: set to true to display a vu-meter next in the fader
    - the meter's `id` will be the same as the widget's with `/meter` appended to it
    - the meter's `path `will be the same as the widget's with `/meter` appended to it


#### `css`
```
--color-gauge:color;
--color-knob:color;
--color-pips:color;
```

----

## Knob

```js
{
    type:'knob',
    // etc
}
```


#### `noPip`
- type: `boolean`
- default: `false`
- usage: set to `true` to hide the scale

#### `range`
- type: `object`
- default: `{"min":0,"max":1}`
- usage: `range` defines the breakpoints of the fader's scale
    - keys can be percentages and/or `min` / `max`
    - values can be `number` or `object` if a custom label is needed
- example:
```js
range: {
    "min":0,
    "50%":1,        
    "max": {"inf":10} // "inf" will be used as a custom label on the scale
}
```

#### `logScale`
- type: `boolean`
- default: `false`
- usage: set to `true` use logarithmic scaling between breakpoints


#### `unit`
- type: `string`
- default: `empty`
- usage: `unit` will be appended to the displayed widget's value (it doesn't affect osc messages)


#### `snap`
- type: `boolean`
- default: `false`
- usage: by default, dragging the widget *vertically* will modify it's value starting from its last value. Setting this to `true` will make it snap directly to the mouse/touch position.

#### `css`
```
--color-gauge:color;
--color-knob:color;
--color-pips:color;
```
