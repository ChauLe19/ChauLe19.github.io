# Understanding Electricity 101: The basics (Voltage, Current, Resistance, Power)

---

Hi there,

Let me guess, you are trying to get a sense of electricity? You come to the right place. This blog will give you the basics of understanding of electricity. What you need to do is simple, think of how fluid flows!

## Definition of electricity

> Electricity is the flow of electric charge

Imagine you are a drop of water in the river flowing with thousands of others like you. Similarly, you are an electric charge (or an electron) rushing through with the crowd of many electrons like you. The flow of electrons is electricity!

| ![Water Flow](/images/water_flow.jpg) | ![Electron Flow](/images/electron_flow.jpg) |
|:----------:|:-------------:|
| Water Flow  | Electron Flow |

## Current (i)

>   Current is the flowing speed of electrons
>
>   Unit: A (Ampere) (or C/s)    

Current describes how fast the electrons are moving. It's very similar to how fast the water (H2O molecules) is moving. 

| ![Current](/images/current.jpg) |
|:-------------:|
| Guess how many electrons can pass through that finish line in 1 minute? |

Well, these electrons are tiny, so we can't see them with our normal eyes. We can't count them electron by electron. Instead, we measure how much electrical charge has passed through. The electrical charge has the unit of Coulomb (symbol: C).

> $$
> 1~electron = -1.602 \times 10^{-19} C
> $$
>
> $$
> 1~proton = +1.602 \times 10^{-19} C
> $$
>
> Note: An electron has a negative charge, and a proton has a positive charge. Therefore, electrons have negative Coulomb, while protons have positive one.

As mentioned, current is the speed of electrical charge. Therefore, if 1 electron passed through the line in 1 second, the current is -1.602 x 10-19 C/s. This current is super small. (In reality, this current won't serve you anything 😆.) In application, we need more than this number.
And we also defined:
> $$
> 1~A = 1~C/s
> $$
>
> $A: Ampere$
>
> $C/s = Coulomb~per~second$

Ampere is the SI unit for electric current. As we move on, we use Ampere to describe electric current. 


## Voltage (v)
> Voltage is the potential difference between two points in the circuit, or how much energy transferred per charge   
>
> Unit: V (Volt) (or J/C)   

Think of a water pipe that has different pressure on the two ends. The force from the higher pressured end pushes the water to the lower pressured end. The larger the difference in pressure between two ends, the higher speed and higher the water flow.

Similarly, voltage is the potential difference between two ends of the wire. The difference in potential pushes electrons through the wire to the lower potential. In batteries, the chemical reaction inside produces a higher potential at one end. (See [how batteries work?](https://www.explainthatstuff.com/batteries.html))

| ![Voltage](/images/voltage.jpg) |
|:-------------:|
| Electrons repel each other that causes a higher potential at the area with higher density of electrons and move to the other side |

We defined:
> $$
> 1~V = 1~J/C
> $$
>
> $V = Volts$
>
> $J/C = Joules~per~Coulomb$

The higher the difference leads to higher energy being transferred per charge (or the higher pressure difference of the pipe can lead water to have more energy). Therefore, we can also define Voltage as how much work is being transferred per charge.

## Resistance (R)
> Resistance is the hindrance for current to flow  
>
> Unit: Ω (Ohm) (or V/A)    

Continuing with our fluid flow analogy, a water pipe can have a large or small cross-section. A pipe with a smaller cross-section will slow the amount of water that can flow through compared to one with a larger cross-section. The fluid is also a factor in the flow since a thicker fluid will flow slower than a thinner fluid and vice versa.

In electricity, conductivity and thickness are two factors that can contribute to resistance. For conductivity, we can think of metals, which are more conductive than plastic for example. (See why?) Wire thickness can also prevent electron flows similar to our water pipes. However, since wires are used to conduct electricity, in most electricity analysis, they are assumed to have zero resistance.

Note: besides conductivity and thickness, there are also heat and electrical components which are being used, such as LEDs, resistors, capacitors, diode, etc. which can change resistance.

> To define Resistance mathematically, we have Ohm's Law:
>
> $$
> v= iR \Rightarrow R = \frac{v}{i}
> $$
>
> $v: Voltage$
>
> $i: Current$
>
> $R: Resistance~(\Omega=V/A)$

## Power (p)
> Power is the electrical energy transferred per unit of time    
>
> Unit: W (Watt) (or J/s)    

Power shows how much work can be done in an amount of time. The higher the power, the more work done in the same amount of time.

Power is calculated to be:
> $$
> p = vi
> $$
>
> $p: Power~(J/s)$
>
> $v: Voltage$
>
> $i: Current$

Using units of voltage and current to find the unit of power:
> $$
> p = vi = V \times A
> $$
> $$
> = (J/C) \times (C/s)
> $$
> $$
> = J/s
> $$

We define:
> $$
> 1~J/s = 1~W
> $$
>
> $J/s: Joules/Second$
>
> $W: Watts$

RECAP:

| Term |Definition|	Symbol| Formula | Unit |
|:----:|:--------:|:-----:|:-------:|:----:|
| Current | the moving speed of electrons |	$i$ | $i = v/R$ | $A$ |
| Voltage |	potential difference between two points in the circuit | $v$ | $v = iR$ | $V$ |
| Resistance | hindrance for current to flow |	$R$ | $R = v/i$ | $\Omega$ |
| Power | electrical energy transferred per unit of time | $p$ | $p = vi$ | $W$ |