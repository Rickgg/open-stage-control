# Plots

Plots are tools that display other widgets' state or incomming osc messages. They are not sensitive to mouse and touch interactions.

## Led
```js
{
    type:'led',
    // etc
}
```

#### `range`
- type: `object`
- default: `{"min":0,"max":1}`
- usage: defines the `min` and `max` value the led's intensity will be mapped to

#### `logScale`
- type: `boolean`
- default: `false`
- usage: set to true use logarithmic scaling



## Plot

The plot receives an array of [x,y] coordinates and draws them on a chart with linear or logarithmic interpolation.

```js
{
    type:'plot',
    // etc
}
```

#### `points`
- type: `array|string`
- default: `[]`
- usage:
    - as a `string`: a widget's `id` whose multiple values will be displayed on the `y` axis, evenly spaced on the `x` axis (only *[matrices](matrices.md)* and *[pads](pads.md)* will work)
    - as an `array`: each element must be an `array` of `[x,y]` coordinates, where `x` and `y` can either be a:
        - `number`: constant values
        - `string`: a widget's `id` whose value will be used

#### `range`
- type: `object`
- default:
    `{
        x:{"min":0,"max":1},
        y:{"min":0,"max":1}
    }`
- usage: defines the `min` and `max` values for the `x` and `y` axis

#### `logScaleX`
- type: `boolean`
- default: `false`
- usage: set to `true` to use logarithmic scale for the `x` axis (log10)

#### `logScaleY`
- type: `boolean`
- default: `false`
- usage: set to `true` to use logarithmic scale for the `y` axis (log10)

## Visualizer

The visualizer displays the evolution in time of a received value (through osc) *or* another widget's value.

```js
{
    type:'visualizer',
    // etc
}
```

#### `widgetId`
- type: `object`
- default: `empty`
- usage: a widget's `id` whose value will be displayed (thus bypassing the incoming osc)

#### `duration`
- type: `number`
- default: `1`
- usage: window size in seconds

#### `range`
- type: `object`
- default: `{"min":0,"max":1}`
- usage: defines the `min` and `max` values for the `y` axis

#### `logScale`
- type: `boolean`
- default: `false`
- usage: set to `true` use logarithmic scaling (log10)


## Text

Text displays incoming values (via osc) as text

```js
{
    type:'text',
    // etc
}
```

#### `vertical`
- type: `boolean`
- default: `false`
- usage: set to `true` display vertically


## Meter

Meter displays incoming numerical values (via osc) as a gauge level

```js
{
    type:'meter',
    // etc
}
```

#### `horizontal`
- type: `boolean`
- default: `false`
- usage: set to `true` to display the meter horizontally

#### `range`
- see fader's [`range`](sliders/#fader)

#### `logScale`
- see fader's [`logScale`](sliders/#fader)
