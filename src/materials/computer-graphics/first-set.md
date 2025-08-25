# First set

### Point and Vector Definitions and Operations

* A **point** represents a specific location in space. It has coordinates that define its position.
* A **vector** represents a direction and magnitude, but not a specific location. It can be thought of as a displacement from one point to another.

    Operations:

* Vector-vector addition/subtraction: Results in a new vector.
* Scalar-vector multiplication: Scales the magnitude of a vector.
* Dot product: Gives a scalar value representing the projection of one vector onto another.
* Cross product (for 3D vectors): Gives a vector perpendicular to both input vectors.
* Point - Point = Vector
* Point + Vector = Point

### 2. Right-Handed and Left-Handed Coordinate Systems

* In a **right-handed coordinate system**, if you curl the fingers of your right hand from the positive $x$-axis to the positive $y$-axis, your thumb points in the direction of the positive $z$-axis.
* In a **left-handed coordinate system**, if you curl the fingers of your left hand from the positive $x$-axis to the positive $y$-axis, your thumb points in the direction of the positive $z$-axis.

### 3. Left-handed to Right-handed Coordinate Transformation

* If you have a left-handed system ($i$, $j$, $k$), replacing $k$ with $-k$ will result in a right-handed system ($i$, $j$, $-k$).
* If a point has coordinates $(x, y, z)$ in the left-handed system, its coordinates in the right-handed system ($i$, $j$, $-k$) will be $(x, y, -z)$.

### 2D Polar Coordinate System Definition and Conversions

* A 2D polar coordinate system defines a point in a plane using a distance from the origin ($r$, the radius) and an angle from a reference direction ($\phi$, the angle).
* Cartesian $(x, y)$ to Polar $(r, \phi)$:
  * $r = \sqrt{x^2 + y^2}$
  * $\phi = \arctan\left(\frac{y}{x}\right)$ (with adjustments based on the quadrant of $(x, y)$)
* Polar $(r, \phi)$ to Cartesian $(x, y)$:
  * $x = r \cdot \cos(\phi)$
  * $y = r \cdot \sin(\phi)$

### 5. Cartesian to Polar Coordinate Examples

* To solve this, apply the Cartesian to Polar conversion formulas from the previous section to each point:
  * $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$: $r = 1$, $\phi = 0$
  * $\begin{bmatrix} 0 \\ 2 \end{bmatrix}$: $r = 2$, $\phi = \frac{\pi}{2}$
  * $\begin{bmatrix} -3 \\ 0 \end{bmatrix}$: $r = 3$, $\phi = \pi$
  * $\begin{bmatrix} 0 \\ -4 \end{bmatrix}$: $r = 4$, $\phi = \frac{3\pi}{2}$
  * $\begin{bmatrix} 1 \\ 1 \end{bmatrix}$: $r = \sqrt{2}$, $\phi = \frac{\pi}{4}$
  * $\begin{bmatrix} -2 \\ 2 \end{bmatrix}$: $r = 2\sqrt{2}$, $\phi = \frac{3\pi}{4}$
  * $\begin{bmatrix} -3 \\ -3 \end{bmatrix}$: $r = 3\sqrt{2}$, $\phi = \frac{5\pi}{4}$
  * $\begin{bmatrix} 4 \\ -4 \end{bmatrix}$: $r = 4\sqrt{2}$, $\phi = \frac{7\pi}{4}$
  * $\begin{bmatrix} 1 \\ \sqrt{3} \end{bmatrix}$: $r = 2$, $\phi = \frac{\pi}{3}$

### 6. Polar to Cartesian Coordinate Examples

* Apply the Polar to Cartesian conversion formulas:
  * $(1, 0)$: $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$
  * $\left(2, \frac{\pi}{2}\right)$: $\begin{bmatrix} 0 \\ 2 \end{bmatrix}$
  * $(3, \pi)$: $\begin{bmatrix} -3 \\ 0 \end{bmatrix}$
  * $\left(4, \frac{3\pi}{2}\right)$: $\begin{bmatrix} 0 \\ -4 \end{bmatrix}$
  * $\left(\sqrt{2}, \frac{\pi}{4}\right)$: $\begin{bmatrix} 1 \\ 1 \end{bmatrix}$
  * $\left(\sqrt{8}, \frac{3\pi}{4}\right)$: $\begin{bmatrix} -2 \\ 2 \end{bmatrix}$
  * $\left(\sqrt{18}, \frac{5\pi}{4}\right)$: $\begin{bmatrix} -3 \\ -3 \end{bmatrix}$
  * $\left(\sqrt{32}, \frac{7\pi}{4}\right)$: $\begin{bmatrix} 4 \\ -4 \end{bmatrix}$
  * $\left(2, \frac{\pi}{3}\right)$: $\begin{bmatrix} 1 \\ \sqrt{3} \end{bmatrix}$

### 7. 3D Spherical Coordinate System Definition and Conversions

* A spherical coordinate system defines a point in 3D space using:
  * $r$ (radius): distance from the origin
  * $\phi$ (azimuthal angle): angle in the $xy$-plane from the positive $x$-axis
  * $\theta$ (polar angle): angle from the positive $z$-axis
* Cartesian $(x, y, z)$ to Spherical $(r, \phi, \theta)$:
  * $r = \sqrt{x^2 + y^2 + z^2}$
  * $\phi = \arctan\left(\frac{y}{x}\right)$ (adjust for quadrant)
  * $\theta = \arccos\left(\frac{z}{r}\right)$
* Spherical $(r, \phi, \theta)$ to Cartesian $(x, y, z)$:
  * $x = r \cdot \sin(\theta) \cdot \cos(\phi)$
  * $y = r \cdot \sin(\theta) \cdot \sin(\phi)$
  * $z = r \cdot \cos(\theta)$

### 8. Cartesian to Spherical Coordinate Examples

* $\begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}$: $\left(1, 0, \frac{\pi}{2}\right)$
* $\begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}$: $\left(1, \frac{\pi}{2}, \frac{\pi}{2}\right)$
* $\begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}$: $(1, \text{undefined}, 0)$
* $\begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}$: $\left(\sqrt{3}, \frac{\pi}{4}, \arccos\left(\frac{1}{\sqrt{3}}\right)\right)$

### 9. Spherical to Cartesian Coordinate Examples

* $(1, 0, 0)$: $\begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}$
* $(1, \pi, 0)$: $\begin{bmatrix} 0 \\ 0 \\ -1 \end{bmatrix}$
* $(1, 0, \pi)$: $\begin{bmatrix} 0 \\ 0 \\ -1 \end{bmatrix}$
* $\left(1, 0, \frac{\pi}{2}\right)$: $\begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}$
* $\left(1, \frac{\pi}{2}, \frac{\pi}{2}\right)$: $\begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}$
* $\left(1, 0, \frac{3\pi}{4}\right)$: $\begin{bmatrix} -\frac{\sqrt{2}}{2} \\ 0 \\ -\frac{\sqrt{2}}{2} \end{bmatrix}$
* $\left(2, \frac{\pi}{2}, \frac{3\pi}{4}\right)$: $\begin{bmatrix} -\sqrt{2} \\ \sqrt{2} \\ -\sqrt{2} \end{bmatrix}$

### 10. Barycentric Coordinates in 2D Number of Points

* To describe the entire Euclidean plane using barycentric coordinates, we need to fix **three** non-collinear points.
* "Not lying in an $n-1$ dimensional subspace" means the points cannot lie on the same line (in a 2D plane). They must form a triangle.

### 11. Barycentric Coordinates in 3D Number of Points

* To describe the entire Euclidean space, we need to fix **four** non-coplanar points.
* "Not lying in an $n-1$ dimensional subspace" means the points cannot lie in the same plane (in 3D space). They must form a tetrahedron.

### 12. Barycentric to Cartesian Coordinate Conversion Example

* To find the Cartesian coordinates, use the formula: $P = \alpha a + \beta b + \gamma c$, where $a = (-1, 1)$, $b = (2, 4)$, $c = (5, -2)$, and $\alpha$, $\beta$, $\gamma$ are the barycentric coordinates.
  * $(1, 0, 0)$: $(-1, 1)$
  * $(0, 1, 0)$: $(2, 4)$
  * $(0, 0, 1)$: $(5, -2)$
  * $(-1, 1, 1)$: $(2, 1)$
  * $(1, -1, 1)$: $(2, -5)$
  * $(1, 1, -1)$: $(-4, 7)$
  * $\left(\frac{1}{3}, \frac{1}{3}, \frac{1}{3}\right)$: $(2, 1)$
  * $\left(-\frac{1}{4}, \frac{1}{2}, \frac{3}{4}\right)$: $(3.25, 1.5)$

### 13. Cartesian to Barycentric Coordinate Conversion Example

* This involves solving a system of linear equations for each point with respect to $a = (0, 0)$, $b = (4, 0)$, $c = (2, 4)$. For a point $(x, y) = \alpha(0, 0) + \beta(4, 0) + \gamma(2, 4)$ and $\alpha + \beta + \gamma = 1$:
  * $(0, 0)$: $(1, 0, 0)$
  * $(4, 0)$: $(0, 1, 0)$
  * $(2, 4)$: $(0, 0, 1)$
  * $(2, 2)$: $(0.5, 0, 0.5)$
  * $(0, 4)$: $(-1, 0, 2)$
  * $(8, 0)$: $(-1, 2, 0)$
  * $(2, -4)$: $(2, 0, -1)$
  * $(-2, -2)$: $(1.5, -0.5, 0)$

### 14. Euclidean Plane and Space Extension Projective Closures

* The Euclidean plane and space are extended by adding "points at infinity" to create projective spaces.
* Projective closure of $\mathbb{E}^2$: $\mathbb{P}^2$ is formed by adding a line at infinity to $\mathbb{E}^2$.
* Projective closure of $\mathbb{E}^3$: $\mathbb{P}^3$ is formed by adding a plane at infinity to $\mathbb{E}^3$.

### 15. Homogeneous Coordinates Assignment and Representation

* Points in $\mathbb{E}^2$ $(x, y)$ are assigned homogeneous coordinates $(x, y, 1)$. Vectors in $\mathbb{E}^2$ $(x, y)$ are assigned homogeneous coordinates $(x, y, 0)$.
* Points in $\mathbb{E}^3$ $(x, y, z)$ are assigned homogeneous coordinates $(x, y, z, 1)$. Vectors in $\mathbb{E}^3$ $(x, y, z)$ are assigned homogeneous coordinates $(x, y, z, 0)$.
* A triple $(x, y, w)$ represents:
  * A point $\left(\frac{x}{w}, \frac{y}{w}\right)$ if $w \neq 0$.
  * A direction vector $(x, y)$ if $w = 0$.
* A quadruple $(x, y, z, w)$ represents:
  * A point $\left(\frac{x}{w}, \frac{y}{w}, \frac{z}{w}\right)$ if $w \neq 0$.
  * A direction vector $(x, y, z)$ if $w = 0$.

### 16. Homogeneous Coordinates of Points and Vectors

* Homogeneous coordinates of points:
  * $\begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}$: $\begin{bmatrix} 1 \\ 2 \\ 3 \\ 1 \end{bmatrix}$
  * $\begin{bmatrix} 4 \\ -2 \\ -5 \end{bmatrix}$: $\begin{bmatrix} 4 \\ -2 \\ -5 \\ 1 \end{bmatrix}$
* Homogeneous coordinates of vectors:
  * $\begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}$: $\begin{bmatrix} 1 \\ 2 \\ 3 \\ 0 \end{bmatrix}$
  * $\begin{bmatrix} 4 \\ -2 \\ -5 \end{bmatrix}$: $\begin{bmatrix} 4 \\ -2 \\ -5 \\ 0 \end{bmatrix}$
