---
title: Functional components in Vue
date: 2020-04-02T11:55:18.649Z
update: 2020-04-02T11:55:18.649Z
description: Here I explain to you what functional components are and when to use them
featureImg: title.png
---

## What are functional components?

Functional components in Vue are components that do not have any
watchers, computed properties or methods. The only purpose of those
components is to render the content given to them by props.

## How?

In vue 2.5.0+ a functional component in a single-file
component can be defined as follows:

```vuejs
<tempalte>
  <div>{{props.foo}}</div>
</template>
```

Everything that the functional component needs is passed to it
by a context object containing:

- <b>props</b>: An object of the provided props
- <b>children</b>: An array of the VNode children
- <b>slots</b>: A function returning a slots object
- <b>scopedSlots</b>: (2.6.0+) An object that exposes passed-in scoped slots.
  Also exposes normal slots as functions.
- <b>data</b>: The entire data object, passed to the component as the 2nd
  argument of createElement
- <b>parent</b>: A reference to the parent component
- <b>listeners</b>: (2.3.0+) An object containing parent-registered event
  listeners. This is an alias to data.on
- <b>injections</b>: (2.3.0+) if using the inject option, this will contain
  resolved injections.

## Why?

Because there is no need for lifecycle methods, state and reactive data
there can be a huge performace benefit for using functional components.

If you want to learn more about functional components click [here](https://vuejs.org/v2/guide/render-function.html#Functional-Components)
