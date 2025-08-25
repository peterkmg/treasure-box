# Computer Graphics Exam Questions

## First set (BSc_EA_02_Ell.pdf)

1. [What is a point and a vector? What operations can be performed on points and vectors?](/materials/computer-graphics/first-set#_1-point-and-vector-definitions-and-operations)
2. [What does a right-handed and a left-handed coordinate system look like in 3D space?](/materials/computer-graphics/first-set#_2-right-handed-and-left-handed-coordinate-systems)
3. [Given a left-handed coordinate system with base vectors i, j, k. Create a right-handed system from the same origin using the vectors i, j, -k (draw it)! What will be the coordinates of a point identified by $\begin{bmatrix} x \\ y \\ z \end{bmatrix}$ in the left-handed system in the right-handed system?](/materials/computer-graphics/first-set#_3-left-handed-to-right-handed-coordinate-transformation)
4. [What is the definition of a 2D polar coordinate system? How can you calculate the polar coordinates of a point given in a Cartesian coordinate system? How can you calculate the Cartesian coordinates $\begin{bmatrix} x \\ y \end{bmatrix}$ of a point given in polar coordinates?](/materials/computer-graphics/first-set#_4-2d-polar-coordinate-system-definition-and-conversions)
5. [What are the polar coordinates $(r, \phi)$ of the following points given in Cartesian coordinates? Remember the notable angles and trigonometric functions in right-angled triangles defined by the coordinates! $\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}, \begin{bmatrix} 0 \\ 2 \end{bmatrix}, \begin{bmatrix} -3 \\ 0 \end{bmatrix}, \begin{bmatrix} 0 \\ -4 \end{bmatrix}, \begin{bmatrix} 1 \\ 1 \end{bmatrix}, \begin{bmatrix} -2 \\ 2 \end{bmatrix}, \begin{bmatrix} -3 \\ -3 \end{bmatrix}, \begin{bmatrix} 4 \\ -4 \end{bmatrix}, \begin{bmatrix} 1 \\ \sqrt{3} \end{bmatrix}$](/materials/computer-graphics/first-set#_5-cartesian-to-polar-coordinate-examples)
6. [What are the Cartesian coordinates $\begin{bmatrix} x \\ y \end{bmatrix}$ of the following points given in polar coordinates $(r, \phi)$? $(r,\phi)=(1,0),(2,\frac{\pi}{2}),(3,\pi),(4,\frac{3\pi}{2}),(\sqrt{2},\frac{\pi}{4}),(\sqrt{8},\frac{3\pi}{4}),(\sqrt{18},\frac{5\pi}{4}),(\sqrt{32},\frac{7\pi}{4}),(2,\frac{\pi}{3})$](/materials/computer-graphics/first-set#_6-polar-to-cartesian-coordinate-examples)
7. [What is the definition of a spherical/3D polar coordinate system? How can you calculate the spherical coordinates of a point given in a Cartesian coordinate system? How can you calculate the Cartesian coordinates of a point given in 3D polar coordinates?](/materials/computer-graphics/first-set#_7-3d-spherical-coordinate-system-definition-and-conversions)
8. [What are the spherical coordinates $(r, \phi, \theta)$ of the following points given in Cartesian coordinates $\begin{bmatrix} x \\ y \\ z \end{bmatrix}$? $\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}, \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}, \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}, \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}$](/materials/computer-graphics/first-set#_8-cartesian-to-spherical-coordinate-examples)
9. [What are the Cartesian coordinates $\begin{bmatrix} x \\ y \\ z \end{bmatrix}$ of the following points given in spherical coordinates $(r, \phi, \theta)$? $(r,\phi,\theta)=(1,0,0),(1,\pi,0),(1,0,\pi),(1,0,\frac{\pi}{2}),(1,\frac{\pi}{2},\frac{\pi}{2}),(1,0,\frac{3\pi}{4}),(2,\frac{\pi}{2},\frac{3\pi}{4})$](/materials/computer-graphics/first-set#_9-spherical-to-cartesian-coordinate-examples)
10. [How many points do we need to fix in the plane if we want to describe the entire Euclidean plane (all its points) using barycentric coordinates? What does the phrase \"not lying in an n-1 dimensional subspace\" mean in this case, what geometric constraint does it impose on the fixed points?](/materials/computer-graphics/first-set#_10-barycentric-coordinates-in-2d-number-of-points)
11. [How many points do we need to fix in the plane if we want to describe the entire Euclidean space (all its points) using barycentric coordinates? What does the phrase \"not lying in an n-1 dimensional subspace\" mean in this case, what geometric constraint does it impose on the fixed points?](/materials/computer-graphics/first-set#_11-barycentric-coordinates-in-3d-number-of-points)
12. [Let $a = (-1, 1)$, $b = (2, 4)$, $c = (5, -2)$ be points in the plane. What will be the Cartesian coordinates of the plane points defined by the following barycentric coordinates with respect to points a, b, c? (1, 0, 0), (0, 1, 0), (0, 0, 1), (-1, 1, 1), (1, -1, 1), (1, 1, -1), ($\frac{1}{3}, \frac{1}{3}, \frac{1}{3}$), ($-\frac{1}{4}, \frac{1}{2}, \frac{3}{4}$)](/materials/computer-graphics/first-set#_12-barycentric-to-cartesian-coordinate-conversion-example)
13. [What will be the barycentric coordinates of the following points with respect to the points $a = (0, 0)$, $b = (4, 0)$, $c = (2, 4)$? (0, 0), (4, 0), (2, 4), (2, 2), (0, 4), (8, 0), (2, -4), (-2, -2)](/materials/computer-graphics/first-set#_13-cartesian-to-barycentric-coordinate-conversion-example)
14. [How did we extend the Euclidean plane and space? What are the definitions of the projective closures of $\mathbb{E}^2$ and $\mathbb{E}^3$?](/materials/computer-graphics/first-set#_14-euclidean-plane-and-space-extension-projective-closures)
15. [How did we assign homogeneous coordinates to the points and vectors of the Euclidean space? What does a triple [quadruple] of projective plane [space] coordinates represent in Euclidean space (depending on the values)?](/materials/computer-graphics/first-set#_15-homogeneous-coordinates-assignment-and-representation)
16. [What will be the homogeneous coordinates of the points $\begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}, \begin{bmatrix} 4 \\ -2 \\ -5 \end{bmatrix}$? What will be the homogeneous coordinates of the vectors $\begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}, \begin{bmatrix} 4 \\ -2 \\ -5 \end{bmatrix}$?](/materials/computer-graphics/first-set#_16-homogeneous-coordinates-of-points-and-vectors)
17. [What are the homogeneous coordinate forms of the origin, the x-axis, the y-axis, and the z-axis?](/materials/computer-graphics/first-set#_17-homogeneous-coordinates-of-origin-and-axes)
18. [What will be the elements given with the following homogeneous coordinates in Euclidean space? What will their coordinates be? $\begin{bmatrix} 6 \\ 15 \\ 9 \\ 3 \end{bmatrix}, \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}, \begin{bmatrix} 4 \\ 6 \\ 8 \\ -2 \end{bmatrix}, \begin{bmatrix} 5 \\ 4 \\ 2 \\ 0 \end{bmatrix}, \begin{bmatrix} 5 \\ 4 \\ 2 \\ 0 \end{bmatrix}, \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}, \begin{bmatrix} 0 \\ 0 \\ 0 \\ 0 \end{bmatrix}$](/materials/computer-graphics/first-set#_18-homogeneous-coordinates-to-euclidean-space-elements)
19. [What ways of defining a line in a plane do you know?](/materials/computer-graphics/first-set#_19-ways-of-defining-a-line-in-a-plane)
20. [A line is given in the plane by its point $p = \begin{bmatrix} 2 \\ 3 \end{bmatrix}$ and its normal vector $n = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$. What will be a homogeneous implicit equation of the line in the plane? What will be the Hesse normal form of the equation?](/materials/computer-graphics/first-set#_20-homogeneous-and-hesse-normal-form-of-a-line)
21. [What ways of defining a line in space do you know?](/materials/computer-graphics/first-set#_21-ways-of-defining-a-line-in-space)
22. [What ways of defining a plane in space do you know?](/materials/computer-graphics/first-set#_22-ways-of-defining-a-plane-in-space)
23. [Let a plane be given by its points $\begin{bmatrix} 3 \\ 3 \\ 2 \end{bmatrix}, \begin{bmatrix} 6 \\ 4 \\ 6 \end{bmatrix}, \begin{bmatrix} 2 \\ 9 \\ 5 \end{bmatrix}$. What will be a parametric equation of the plane with spanning vectors?](/materials/computer-graphics/first-set#_23-parametric-equation-of-a-plane)
24. [Given the equation of a line in the plane. What is a normal vector of the line? Give one point of the line!](/materials/computer-graphics/first-set#_24-normal-vector-and-point-of-a-line)
25. [Given the equation of a plane in space. What is a normal vector of the plane? Give one point of the plane!](/materials/computer-graphics/first-set#_25-normal-vector-and-point-of-a-plane)

## Second set (BSc_EA_04_Ell.pdf)

1. How does light propagate? Which of its steps depend on the wavelength of the incident light?
2. Which photoreceptive nerve cells are found in the retina?
3. What is the CFF (critical flicker frequency)? Why do we perceive a continuous image from a sequence of flashes that occur more frequently than this threshold?
4. What is a tristimulus value?
5. Describe the RGB color space!
6. Describe the CMYK color space!
7. Describe the HSL/HSV color models!
8. In terms of light–material interactions, what types of surfaces have we considered?
9. What is the BRDF? What components do we use to specify it? (Include a drawing!)
10. What is ideal reflection? How can the direction of ideal reflection be calculated? Illustrate the quantities used with a diagram!
11. Derive the calculation for the ideal refraction direction given the surface normal, the incident ray direction, and the relative refractive index!
12. Describe specular reflection and the Phong model! Write down the BRDF and explain the coefficients that appear in the formula!
13. Describe specular reflection and the Phong-Blinn model! Write down the BRDF and explain the coefficients that appear in the formula!
14. What are the implicit, explicit, and parametric equations of the $y$-axis oriented parabola with focus $(0, p)$?
15. What is the parametric equation of the ellipse with center $(4, 3)$, with axes along $\left(\frac{\sqrt{2}}{2},\frac{\sqrt{2}}{2}\right)$ and $\left(-\frac{\sqrt{2}}{2},-\frac{\sqrt{2}}{2}\right)$, and with semi-major axis $a = 4$ and semi-minor axis $b = 3$?
16. Given a surface defined by $f(x,y,z)=x^2+y^2-z$, which of the following points lie on the surface: $(0,0,0)$, $(4,1,2)$, $(-2,2,0)$, $(-2,2,8)$, $(0,1,1)$?

## Third set (BSc_EA_05_Ell.pdf)

1. What is ray tracing? What is its purpose, how does it work, how does it follow the path of light, what components does it decompose into, and what types of rays are there?
2. Describe the term in the simplified illumination equation solved during ray tracing that summarizes incoherent reflections. Explain the terms of the equation, what they represent, and what their parameters are!
3. Write down the simplified illumination equation solved during ray tracing! In which terms can you find the light quantities coming from the emitted, ambient, light source, mirror, and refracted contributions?
4. Derive the ray that originates from the pixel $(i,j)$ (its starting point and direction vector) used during ray tracing.
5. Why and where is there a need for intersection tests in ray tracing?
6. Describe in general the intersection of a ray with a surface given in its parametric form.
7. Describe in general the intersection of a ray with a surface given in its implicit form.
8. Derive the intersection point between a plane defined by the point $q_0$ and normal $n$, and a ray defined by the point $p_0$ and direction vector $v$.
9. Derive the calculation for the intersection point of a sphere with center $c$ and radius $r$, and a ray defined by $(p_0, v)$.
10. Our surface is intersected by a ray with direction
   $v=\begin{pmatrix}0\\-1\\0\end{pmatrix},$
   at a point where the surface normal has the direction
   $\begin{pmatrix}1\\1\\0\end{pmatrix}.$
   What is the direction vector $v_r$ of the ray launched in the ideal reflection direction?
   (Note: In the 4th EA slide deck, the computation of ideal reflection was given, and there the surface normal was of unit length.)
11. Given a sphere with center
   $c=\begin{pmatrix}40\\0\end{pmatrix}$
   and radius $r=2$, what is the intersection point of the ray originating from
   $p_0=\begin{pmatrix}0\\1\end{pmatrix}$
   with direction
   $v=\begin{pmatrix}1\\0\end{pmatrix}$
   with the sphere? How far apart are the ray's origin and the intersection point?
12. Given a sphere with center
   $c=\begin{pmatrix}40\\0\end{pmatrix}$
   and radius $r=2$, what is the intersection point of the ray originating from
   $p_0=\begin{pmatrix}44\\0\end{pmatrix}$
   with direction
   $v=\begin{pmatrix}0\\1\end{pmatrix}$
   with the sphere? How far apart are the ray's origin and the intersection point?
13. Given a ray and an object that has been transformed by a matrix $M$, how can the intersection point of the transformed object be computed using the transformed ray and the original, untransformed object?
14. What is aliasing? How does it manifest itself in ray tracing?
15. Which methods did we study to accelerate intersection tests (bounding volumes, space partitioning, etc.)? Briefly describe them! How are they used to speed up intersection testing?

## Fourth set (BSc_EA_07_Ell.pdf)

1. What is incremental image synthesis, and what related concepts did we discuss? Compare ray tracing and incremental image synthesis!
2. What is the graphics pipeline? What are its inputs and outputs? What are its main steps based on transformations?
3. What coordinate systems did we discuss in relation to the graphics pipeline? Briefly describe them!
4. What transformations did we discuss in the graphics pipeline? Briefly describe them!
5. What is the matrix for perspective projection onto a projection plane parallel to the XY-plane, located $d$ units along the Z-axis from the origin? Derive it! (Include diagrams and triangles, etc.)
6. What is clipping? What is its purpose, in which coordinate system must it be performed, and why?
7. What is rasterization? What is tessellation?
8. What algorithms did we study for solving the hidden surface problem? Briefly describe them!
9. What is trivial back-face culling? For what problem was it used?
10. What is the painter’s algorithm? For what problem was it used?
11. Explain the Z-buffer algorithm!
12. What local illumination shading models did we study? Briefly describe them!
13. What is Gouraud shading? What is Phong shading? Compare the two!
