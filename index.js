function Point(x,y){
  this.x = x
  this.y = y
  this.toString = function(){
    return `(${this.x}, ${this.y})`
  }
}

function Side(length){
  this.length = length
}

function Shape(){}

Shape.prototype.addToPlane = function(x,y){
  this.position = new Point(x,y)
}

Shape.prototype.move = function(x, y){
  this.position = new Point(x,y)
}

function Circle(radius){
  Shape.call(this)
  this.radius = radius
  this.diameter = function(){
    return radius * 2
  }
  this.area = function(){
    return Math.PI * (this.radius**2)
  }
  this.circumference = function(){
    return Math.PI * this.diameter()
  }
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

function Polygon(sides){
  Shape.call(this)
  this.sides = sides
  this.numberOfSides = function(){
    return this.sides.length
  }
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon


Polygon.prototype.perimeter = function(){
    return this.sides.reduce(function(prev, side){
      return prev + side.length
    }, 0)
  }

function Quadrilateral(s1, s2, s3, s4){
  Polygon.call(this, [new Side(s1), new Side(s2), new Side(s3), new Side(s4)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Triangle(s1, s2, s3){
  Polygon.call(this, [new Side(s1), new Side(s2), new Side(s3)])
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Quadrilateral

function Rectangle(width, height){
  Quadrilateral.call(this, width, height, width, height)
  this.width = width
  this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function(){
  return this.height * this.width
}

function Square(side){
  Rectangle.call(this, side, side)
  this.side = side
  this.listProperties = function(){
    return this.hasOwnProperty()
  }
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square
