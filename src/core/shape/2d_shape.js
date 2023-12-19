import * as constants from '../constants';
import p5 from '../main';

export class Shape {
  constructor(ambientDimension, kind) {
    this.ambientDimension = ambientDimension; // dimension.two or dimension.three
    this.kind = kind; // constants.LINES, etc.
    this.contours = [];
    this.currentContour = null;
  }


  addContour(contour) {
    this.contours.push(contour);
    // update currentContour to be used later
    // this.currentContour = contour;
  }

  get contourss() {
    return this.contours;
  }

  isContoursEmpty() {
    return this.contours.length === 0;
  }


  // get currentContour() {
  //   return this.contours[this.contours.length - 1];
  // }

  getContours() {
    return this.contours;
  }

  // beginContour(kind = null) {
  //   this.currentContour = {
  //     kind: kind || this.kind,
  //     firstVertex: null,
  //     primitives: [],
  //   };
  //   this.contours.push(this.currentContour);
  // }
  //
  // endContour() {
  //   // Close the contour if needed
  //   // Implement logic to handle contour closure
  //   this.currentContour = null;
  // }
}



// class Vertex {
//   constructor(...coordinates) {
//     this.coordinates = coordinates;
//   }
// }

// Define the interfaces
export class Contour {
  constructor(kind, firstVertex = null) {
    this.kind = kind; // set to shape kind unless a kind is provided to `beginContour()`
    this.firstVertex = firstVertex; // only needed for segments; otherwise null
    this.primitives = [];
  }

  get getkind() {
    return this.kind;
  }

  addPrimitive(primitive) {
    this.primitives.push(primitive);
  }

  get primitivess() {
    return this.primitives;
  }

  get firstPrimitive() {
    return this.primitives[0];
  }
}

class ShapePrimitive {
  accept(visitor, drawingContext) {
    // To be implemented by subclasses
  }

  addToShape() {

    // To be implemented by subclasses
  }
}

class Segment extends ShapePrimitive {
  constructor(index) {
    super();
    this.index = index;
  }

  getStartVertex() {
    // To be implemented
  }

  getEndVertex() {
    // To be implemented
  }
}


export class VertexSegment extends Segment {
  // constructor(x, y, z, u, v, rendererGL) {
  constructor(vert) {
    super();
    // this.index = index;

    this.vertex2d = vert;

    // this.rendererContext = rendererGL;

    // const vert = new p5.Vector(x, y, z);
    // console.log('vert from p5.Vector', vert);
    // rendererGL.immediateMode.geometry.vertices.push(vert);
    // this.vertex = vert;



    //
    // let z, u, v = 0;
    //
    // // let rendererGL = new p5.RendererGL;
    // const vert = new p5.Vector(x, y, z);
    // rendererGL.immediateMode.geometry.vertices.push(vert); // Push vertex to geometry
    //
    // // Push current normal vector to vertex normals array
    // rendererGL.immediateMode.geometry.vertexNormals.push(
    //   rendererGL._currentNormal);
    //
    // // Define default colors if not set
    // const vertexColor = rendererGL.curFillColor || [0.5, 0.5, 0.5, 1.0];
    // const lineVertexColor = rendererGL.curStrokeColor || [0.5, 0.5, 0.5, 1];
    //
    // // Push vertex and stroke colors to respective arrays in geometry
    // rendererGL.immediateMode.geometry.vertexColors.push(
    //   vertexColor[0],
    //   vertexColor[1],
    //   vertexColor[2],
    //   vertexColor[3]
    // );
    // rendererGL.immediateMode.geometry.vertexStrokeColors.push(
    //   lineVertexColor[0],
    //   lineVertexColor[1],
    //   lineVertexColor[2],
    //   lineVertexColor[3]
    // );
    //
    // // Adjust texture coordinates based on texture dimensions if texture mode is IMAGE
    // if (rendererGL.textureMode === constants.IMAGE &&
    //   !rendererGL.isProcessingVertices) {
    //   if (rendererGL._tex !== null) {
    //     if (this._tex.width > 0 && this._tex.height > 0) {
    //       u /= this._tex.width;
    //       v /= this._tex.height;
    //     }
    //   } else if (
    //     rendererGL.userFillShader !== undefined ||
    //     rendererGL.userStrokeShader !== undefined ||
    //     rendererGL.userPointShader !== undefined
    //   ) {
    //     // Do nothing if user-defined shaders are present
    //   } else if (
    //     arguments.length >= 4
    //   ) {
    //     // Only throw this warning if custom uv's have  been provided
    //     console.warn(
    //       'You must first call texture() before using' +
    //       ' vertex() with image based u and v coordinates'
    //     );
    //   }
    // }
    //
    // rendererGL.immediateMode.geometry.uvs.push(u, v);
    //
    // rendererGL.immediateMode._bezierVertex[0] = x;
    // rendererGL.immediateMode._bezierVertex[1] = y;
    // rendererGL.immediateMode._bezierVertex[2] = z;
    //
    // rendererGL.immediateMode._quadraticVertex[0] = x;
    // rendererGL.immediateMode._quadraticVertex[1] = y;
    // rendererGL.immediateMode._quadraticVertex[2] = z;
  }

  get coordinates() {
    return [this.vertex[0], this.vertex[1]];
  }

  get vertices() {
    return this.vertex;
  }
  getVertices() {
    return this.vertex2d;
  }

  getStartVertex() {
    return this.vertex;
  }

  getEndVertex() {
    return this.vertex;
  }

  accept(visitor) {
    visitor.visitVertexSegment(this, this.rendererContext);
  }
}

class LineSegment extends Segment {
  constructor(index, startVertex, endVertex) {
    super();
    this.index = index;
    this.startVertex = startVertex;
    this.endVertex = endVertex;
  }

  getStartVertex() {
    return this.startVertex;
  }

  getEndVertex() {
    return this.endVertex;
  }
}

export class beginContour extends Segment {
  constructor(rendererGL) {
    super();

    // this.data = vert;

    this.rendererContext = rendererGL;
    // this.index = index;
    // this.startVertex = startVertex;
    // this.controlVertex = controlVertex;
    // this.endVertex = endVertex;
  }

  accept(visitor) {
    this.rendererContext.immediateMode.contourIndices.push(
      this.rendererContext.immediateMode.geometry.vertices.length
    );
    // visitor.visitQuadraticSegment(this, this.rendererContext);
  }
}

export class QuadraticSegment extends Segment {
  constructor(vert, rendererGL) {
    super();

    this.data = vert;

    this.rendererContext = rendererGL;
    // this.index = index;
    // this.startVertex = startVertex;
    // this.controlVertex = controlVertex;
    // this.endVertex = endVertex;
  }

  get vertices() {
    return this.data;
  }

  getStartVertex() {
    return this.startVertex;
  }

  getEndVertex() {
    return this.endVertex;
  }

  accept(visitor) {
    visitor.visitQuadraticSegment(this, this.rendererContext);
  }
}

export class CurveSegment extends Segment {
  constructor(args, rendererGL) {
    super();
    // this.data = [x, y];
    this.data = args;

    this.rendererContext = rendererGL;

    // any better way to have this flag ?
    this.type = 'curveVertex';
    // this.startVertex = startVertex;
    // this.controlVertex1 = controlVertex1;
    // this.controlVertex2 = controlVertex2;
    // this.endVertex = endVertex;
  }
  // constructor(index, startVertex, controlVertex1, controlVertex2, endVertex) {
  //   super();
  //   this.index = index;
  //   this.startVertex = startVertex;
  //   this.controlVertex1 = controlVertex1;
  //   this.controlVertex2 = controlVertex2;
  //   this.endVertex = endVertex;
  // }
  get vertices() {
    return this.data;
  }


  get coordinates() {
    let isComplete = this.data.length >= 8;
    let secondToLastPoint = this.data.slice(-4, -2);

    if(isComplete) {
      return secondToLastPoint;
    }
    else {
      return null;
    }
  }

  getStartVertex() {
    return this.startVertex;
  }

  getEndVertex() {
    return this.endVertex;
  }


  accept(visitor) {
    visitor.visitCurveSegment(this, this.rendererContext);
  }
}

export class BezierSegment extends Segment {
  constructor(vert, rendererGL) {
    super();

    this.data = vert;

    this.rendererContext = rendererGL;

    // this.index = index;
    // this.startVertex = startVertex;
    // this.controlVertex = controlVertex;
    // this.endVertex = endVertex;
  }

  get vertices() {
    return this.data;
  }

  getStartVertex() {
    return this.startVertex;
  }

  getEndVertex() {
    return this.endVertex;
  }

  accept(visitor) {
    visitor.visitBezierSegment(this, this.rendererContext);
  }
}

export class Point extends ShapePrimitive {
  constructor(vert, context) {
    super();
    this.vertex2d = vert;
    // this.rendererContext = context;
  }
  accept(visitor, context) {
    visitor.visitPoint(this, context);
  }
}

export class PrimitiveToContext2DConverter {

  constructor(index) {
    this.index = index;
  }

  visitPoint(point, context) {
    let v = point.vertex2d;

    if (context._doStroke) {
      context._pInst.stroke(v[6]);
    }
    context._pInst.point(v[0], v[1]);
  }

  visitVertexSegment(vertexSegment, drawingContext) {
    // Process the VertexSegment for 2D rendering
    let vertex = vertexSegment.getVertices();

    // let v;
    // const numVerts = vertices.length;
    // if (!this._clipping) this.drawingContext.beginPath();
    if (this.index === 0) {
      drawingContext.moveTo(vertex[0], vertex[1]);
      // drawingContext.lineTo(vertex[0], vertex[1]);

    }
    // for (i = 1; i < numVerts; i++) {
    //   v = vertices[i];
    if (vertex.isVert) {
      // if (v.moveTo) {
      // if (closeShape) this.drawingContext.closePath();
      // this.drawingContext.moveTo(v[0], v[1]);
      // } else {
      drawingContext.lineTo(vertex[0], vertex[1]);
      // }
    }
    // }
    // this._doFillStrokeClose(closeShape);

    console.log('inside visitVertexSegment');
    this.index++;

    // const vertices = vertexSegment.getVertices(); // Fetch vertices from the segment
    // console.log('vertices' ,vertices);
    // if (vertices.length > 0) {
    //   const [x, y] = vertices[0]; // Considering only the first vertex for simplicity
    //   drawingContext.moveTo(x, y); // Move to the first vertex
    //   for (let i = 1; i < vertices.length; i++) {
    //     const [x, y] = vertices[i];
    //     drawingContext.lineTo(x, y); // Draw lines between subsequent vertices
    //   }
    // }
  }
  visitQuadraticSegment(quadraticSegment, drawingContext) {
    // Process the VertexSegment for 2D rendering
    let vert = quadraticSegment.getVertices();

    console.log('vert from visitQuadraticSegment', vert);

    // let v;
    // const numVerts = vertices.length;
    // if (!this._clipping) this.drawingContext.beginPath();


    if (this.index === 0) {
      let v = vert.slice(-2);
      drawingContext.moveTo(v[0], v[1]);
    }


    drawingContext.quadraticCurveTo(...vert);
    // if (this.index === 0) {
    //   drawingContext.moveTo(vertex[0], vertex[1]);
    // }
    // for (i = 1; i < numVerts; i++) {
    //   v = vertices[i];
    // if (vertex.isVert) {
    // if (v.moveTo) {
    // if (closeShape) this.drawingContext.closePath();
    // this.drawingContext.moveTo(v[0], v[1]);
    // } else {
    // drawingContext.lineTo(vertex[0], vertex[1]);
    // }
    // }
    // }
    // this._doFillStrokeClose(closeShape);

    console.log('inside visitQuadraticSegment');
    this.index++;

    // const vertices = vertexSegment.getVertices(); // Fetch vertices from the segment
    // console.log('vertices' ,vertices);
    // if (vertices.length > 0) {
    //   const [x, y] = vertices[0]; // Considering only the first vertex for simplicity
    //   drawingContext.moveTo(x, y); // Move to the first vertex
    //   for (let i = 1; i < vertices.length; i++) {
    //     const [x, y] = vertices[i];
    //     drawingContext.lineTo(x, y); // Draw lines between subsequent vertices
    //   }
    // }
  }

  visitBezierSegment(bezierSegment, drawingContext) {
    // Process the VertexSegment for 2D rendering
    let vert = bezierSegment.getVertices();

    console.log('vert from visitbezierSegment', vert);

    // let v;
    // const numVerts = vertices.length;
    // if (!this._clipping) this.drawingContext.beginPath();


    // if (this.index === 0) {
    //   let v = vert.slice(-2);
    //   drawingContext.moveTo(v[0], v[1]);
    // }


    drawingContext.bezierCurveTo(...vert);
    // if (this.index === 0) {
    //   drawingContext.moveTo(vertex[0], vertex[1]);
    // }
    // for (i = 1; i < numVerts; i++) {
    //   v = vertices[i];
    // if (vertex.isVert) {
    // if (v.moveTo) {
    // if (closeShape) this.drawingContext.closePath();
    // this.drawingContext.moveTo(v[0], v[1]);
    // } else {
    // drawingContext.lineTo(vertex[0], vertex[1]);
    // }
    // }
    // }
    // this._doFillStrokeClose(closeShape);

    console.log('inside visitbezierSegment');
    this.index++;

    // const vertices = vertexSegment.getVertices(); // Fetch vertices from the segment
    // console.log('vertices' ,vertices);
    // if (vertices.length > 0) {
    //   const [x, y] = vertices[0]; // Considering only the first vertex for simplicity
    //   drawingContext.moveTo(x, y); // Move to the first vertex
    //   for (let i = 1; i < vertices.length; i++) {
    //     const [x, y] = vertices[i];
    //     drawingContext.lineTo(x, y); // Draw lines between subsequent vertices
    //   }
    // }
  }

  visitCurveSegment(curveSegment, drawingContext) {
    // Process the VertexSegment for 2D rendering
    let vert = curveSegment.data;

    console.log('vert from visitcurveSegment', vert);

    // let v;
    // const numVerts = vertices.length;
    // if (!this._clipping) this.drawingContext.beginPath();


    // if (this.index === 0) {
    //   let v = vert.slice(-2);
    //   drawingContext.moveTo(v[0], v[1]);
    // }

    if (this.index === 0) {
      console.log('only once 0 ??', this.index);
      // drawingContext.moveTo(...curveSegment.coordinates);
    }

    let bezierArrays = catmullRomToBezier(vert, 0);
    for (const arr of bezierArrays) {
      drawingContext.bezierCurveTo(...arr);
    }
    // if (this.index === 0) {
    //   drawingContext.moveTo(vertex[0], vertex[1]);
    // }
    // for (i = 1; i < numVerts; i++) {
    //   v = vertices[i];
    // if (vertex.isVert) {
    // if (v.moveTo) {
    // if (closeShape) this.drawingContext.closePath();
    // this.drawingContext.moveTo(v[0], v[1]);
    // } else {
    // drawingContext.lineTo(vertex[0], vertex[1]);
    // }
    // }
    // }
    // this._doFillStrokeClose(closeShape);

    console.log('inside visitcurveSegment');
    this.index++;

    // const vertices = vertexSegment.getVertices(); // Fetch vertices from the segment
    // console.log('vertices' ,vertices);
    // if (vertices.length > 0) {
    //   const [x, y] = vertices[0]; // Considering only the first vertex for simplicity
    //   drawingContext.moveTo(x, y); // Move to the first vertex
    //   for (let i = 1; i < vertices.length; i++) {
    //     const [x, y] = vertices[i];
    //     drawingContext.lineTo(x, y); // Draw lines between subsequent vertices
    //   }
    // }
  }


  // Implement other visit methods for different primitives if needed
}

function catmullRomToBezier(vertices, tightness) {
  let X0, Y0, X1, Y1, X2, Y2, X3, Y3;
  let s = 1 - tightness;
  let bezX1, bezY1, bezX2, bezY2, bezX3, bezY3;
  let bezArrays = [];

  for (let i = 2; i + 4 < vertices.length; i+= 2) {
    [X0, Y0, X1, Y1, X2, Y2, X3, Y3] = vertices.slice(i - 2, i + 6);

    bezX1 = X1 + (s * X2 - s * X0) / 6;
    bezY1 = Y1 + (s * Y2 - s * Y0) / 6;

    bezX2 = X2 + (s * X1 - s * X3) / 6;
    bezY2 = Y2 + (s * Y1 - s * Y3) / 6;

    bezX3 = X2;
    bezY3 = Y2;

    bezArrays.push([bezX1, bezY1, bezX2, bezY2, bezX3, bezY3]);
  }
  return bezArrays;
}

export class PrimitiveToVerticesConverter {
  visitVertexSegment(vertexSegment, rendererGL) {
    const vert = vertexSegment.vertices; // Get coordinates
    // let z, u, v = 0;

    // let rendererGL = new p5.RendererGL;
    // const vert = new p5.Vector(x, y, z);
    // rendererGL.immediateMode.geometry.vertices.push(vert); // Push vertex to geometry

    // Push current normal vector to vertex normals array
    rendererGL.immediateMode.geometry.vertexNormals.push(
      rendererGL._currentNormal);

    // Define default colors if not set
    const vertexColor = rendererGL.curFillColor || [0.5, 0.5, 0.5, 1.0];
    const lineVertexColor = rendererGL.curStrokeColor || [0.5, 0.5, 0.5, 1];

    // Push vertex and stroke colors to respective arrays in geometry
    rendererGL.immediateMode.geometry.vertexColors.push(
      vertexColor[0],
      vertexColor[1],
      vertexColor[2],
      vertexColor[3]
    );
    rendererGL.immediateMode.geometry.vertexStrokeColors.push(
      lineVertexColor[0],
      lineVertexColor[1],
      lineVertexColor[2],
      lineVertexColor[3]
    );
    //
    // // Adjust texture coordinates based on texture dimensions if texture mode is IMAGE
    // if (rendererGL.textureMode === constants.IMAGE &&
    //   !rendererGL.isProcessingVertices) {
    //   if (rendererGL._tex !== null) {
    //     if (rendererGL._tex.width > 0 && rendererGL._tex.height > 0) {
    //
    //       const newU = u / rendererGL._tex.width;
    //       const newV = v / rendererGL._tex.height;
    //
    //       vertexSegment.vertices[3] = newU;
    //       vertexSegment.vertices[4] = newV;
    //     }
    //   } else if (
    //     rendererGL.userFillShader !== undefined ||
    //     rendererGL.userStrokeShader !== undefined ||
    //     rendererGL.userPointShader !== undefined
    //   ) {
    //     // Do nothing if user-defined shaders are present
    //   } else if (
    //     arguments.length >= 4
    //   ) {
    //     // Only throw this warning if custom uv's have  been provided
    //     console.warn(
    //       'You must first call texture() before using' +
    //       ' vertex() with image based u and v coordinates'
    //     );
    //   }
    // }
    //
    rendererGL.immediateMode.geometry.uvs.push(vert.u, vert.v);

    rendererGL.immediateMode._bezierVertex[0] = vert.x;
    rendererGL.immediateMode._bezierVertex[1] = vert.y;
    rendererGL.immediateMode._bezierVertex[2] = vert.z;

    rendererGL.immediateMode._quadraticVertex[0] = vert.x;
    rendererGL.immediateMode._quadraticVertex[1] = vert.y;
    rendererGL.immediateMode._quadraticVertex[2] = vert.z;

  }

  visitBezierSegment(bezierSegment, rendererGL) {
    const args = bezierSegment.vertices; // Get coordinates

    let w_x = [];
    let w_y = [];
    let w_z = [];
    let t, _x, _y, _z, i, k, m;


    const argLength = args.length;


    const LUTLength = rendererGL._lookUpTableBezier.length;



    const fillColors = [];
    for (m = 0; m < 4; m++) fillColors.push([]);
    fillColors[0] = rendererGL.immediateMode.geometry.vertexColors.slice(-4);
    fillColors[3] = rendererGL.curFillColor.slice();

    // Do the same for strokeColor.
    const strokeColors = [];
    for (m = 0; m < 4; m++) strokeColors.push([]);
    // eslint-disable-next-line max-len
    strokeColors[0] = rendererGL.immediateMode.geometry.vertexStrokeColors.slice(-4);
    strokeColors[3] = rendererGL.curStrokeColor.slice();

    if (argLength === 6) {
      rendererGL.isBezier = true;

      // eslint-disable-next-line max-len
      w_x = [rendererGL.immediateMode._bezierVertex[0], args[0], args[2], args[4]];
      // eslint-disable-next-line max-len
      w_y = [rendererGL.immediateMode._bezierVertex[1], args[1], args[3], args[5]];
      // The ratio of the distance between the start point, the two control-
      // points, and the end point determines the intermediate color.
      let d0 = Math.hypot(w_x[0]-w_x[1], w_y[0]-w_y[1]);
      let d1 = Math.hypot(w_x[1]-w_x[2], w_y[1]-w_y[2]);
      let d2 = Math.hypot(w_x[2]-w_x[3], w_y[2]-w_y[3]);
      const totalLength = d0 + d1 + d2;
      d0 /= totalLength;
      d2 /= totalLength;
      for (k = 0; k < 4; k++) {
        fillColors[1].push(
          fillColors[0][k] * (1-d0) + fillColors[3][k] * d0
        );
        fillColors[2].push(
          fillColors[0][k] * d2 + fillColors[3][k] * (1-d2)
        );
        strokeColors[1].push(
          strokeColors[0][k] * (1-d0) + strokeColors[3][k] * d0
        );
        strokeColors[2].push(
          strokeColors[0][k] * d2 + strokeColors[3][k] * (1-d2)
        );
      }

      for (i = 0; i < LUTLength; i++) {
      // Interpolate colors using control points
        rendererGL.curFillColor = [0, 0, 0, 0];
        rendererGL.curStrokeColor = [0, 0, 0, 0];
        _x = _y = 0;
        for (m = 0; m < 4; m++) {
          for (k = 0; k < 4; k++) {
            rendererGL.curFillColor[k] +=
            rendererGL._lookUpTableBezier[i][m] * fillColors[m][k];
            rendererGL.curStrokeColor[k] +=
            rendererGL._lookUpTableBezier[i][m] * strokeColors[m][k];
          }
          _x += w_x[m] * rendererGL._lookUpTableBezier[i][m];
          _y += w_y[m] * rendererGL._lookUpTableBezier[i][m];
        }
        rendererGL.vertex(_x, _y);
      }
      // so that we leave currentColor with the last value the user set it to
      rendererGL.curFillColor = fillColors[3];
      rendererGL.curStrokeColor = strokeColors[3];
      rendererGL.immediateMode._bezierVertex[0] = args[4];
      rendererGL.immediateMode._bezierVertex[1] = args[5];
    } else if (argLength === 9) {
      rendererGL.isBezier = true;

      // eslint-disable-next-line max-len
      w_x = [rendererGL.immediateMode._bezierVertex[0], args[0], args[3], args[6]];
      // eslint-disable-next-line max-len
      w_y = [rendererGL.immediateMode._bezierVertex[1], args[1], args[4], args[7]];
      // eslint-disable-next-line max-len
      w_z = [rendererGL.immediateMode._bezierVertex[2], args[2], args[5], args[8]];
      // The ratio of the distance between the start point, the two control-
      // points, and the end point determines the intermediate color.
      let d0 = Math.hypot(w_x[0]-w_x[1], w_y[0]-w_y[1], w_z[0]-w_z[1]);
      let d1 = Math.hypot(w_x[1]-w_x[2], w_y[1]-w_y[2], w_z[1]-w_z[2]);
      let d2 = Math.hypot(w_x[2]-w_x[3], w_y[2]-w_y[3], w_z[2]-w_z[3]);
      const totalLength = d0 + d1 + d2;
      d0 /= totalLength;
      d2 /= totalLength;
      for (k = 0; k < 4; k++) {
        fillColors[1].push(
          fillColors[0][k] * (1-d0) + fillColors[3][k] * d0
        );
        fillColors[2].push(
          fillColors[0][k] * d2 + fillColors[3][k] * (1-d2)
        );
        strokeColors[1].push(
          strokeColors[0][k] * (1-d0) + strokeColors[3][k] * d0
        );
        strokeColors[2].push(
          strokeColors[0][k] * d2 + strokeColors[3][k] * (1-d2)
        );
      }
      for (i = 0; i < LUTLength; i++) {
        // Interpolate colors using control points
        rendererGL.curFillColor = [0, 0, 0, 0];
        rendererGL.curStrokeColor = [0, 0, 0, 0];
        _x = _y = _z = 0;
        for (m = 0; m < 4; m++) {
          for (k = 0; k < 4; k++) {
            rendererGL.curFillColor[k] +=
        rendererGL._lookUpTableBezier[i][m] * fillColors[m][k];
            rendererGL.curStrokeColor[k] +=
        rendererGL._lookUpTableBezier[i][m] * strokeColors[m][k];
          }
          _x += w_x[m] * rendererGL._lookUpTableBezier[i][m];
          _y += w_y[m] * rendererGL._lookUpTableBezier[i][m];
          _z += w_z[m] * rendererGL._lookUpTableBezier[i][m];
        }
        rendererGL.vertex(_x, _y, _z);
      }
      // so that we leave currentColor with the last value the user set it to
      rendererGL.curFillColor = fillColors[3];
      rendererGL.curStrokeColor = strokeColors[3];
      rendererGL.immediateMode._bezierVertex[0] = args[6];
      rendererGL.immediateMode._bezierVertex[1] = args[7];
      rendererGL.immediateMode._bezierVertex[2] = args[8];
    }

  }
  visitQuadraticSegment(quadraticSegment, rendererGL) {
    const args = quadraticSegment.vertices; // Get coordinates

    let w_x = [];
    let w_y = [];
    let w_z = [];
    let t, _x, _y, _z, i, k, m;
    // variable i for bezierPoints, k for components, and m for anchor points.
    const argLength = args.length;

    t = 0;

    if (
      rendererGL._lookUpTableQuadratic.length === 0 ||
      rendererGL._lutQuadraticDetail !== rendererGL._pInst._curveDetail
    ) {
      rendererGL._lookUpTableQuadratic = [];
      rendererGL._lutQuadraticDetail = rendererGL._pInst._curveDetail;
      const step = 1 / rendererGL._lutQuadraticDetail;
      let start = 0;
      let end = 1;
      let j = 0;
      while (start < 1) {
        t = parseFloat(start.toFixed(6));
        // eslint-disable-next-line max-len
        rendererGL._lookUpTableQuadratic[j] = rendererGL._quadraticCoefficients(t);
        if (end.toFixed(6) === step.toFixed(6)) {
          t = parseFloat(end.toFixed(6)) + parseFloat(start.toFixed(6));
          ++j;
          // eslint-disable-next-line max-len
          rendererGL._lookUpTableQuadratic[j] = rendererGL._quadraticCoefficients(t);
          break;
        }
        start += step;
        end -= step;
        ++j;
      }
    }

    const LUTLength = rendererGL._lookUpTableQuadratic.length;

    // fillColors[0]: start point color
    // fillColors[1]: control point color
    // fillColors[2]: end point color
    const fillColors = [];
    for (m = 0; m < 3; m++) fillColors.push([]);
    fillColors[0] = rendererGL.immediateMode.geometry.vertexColors.slice(-4);
    fillColors[2] = rendererGL.curFillColor.slice();

    // Do the same for strokeColor.
    const strokeColors = [];
    for (m = 0; m < 3; m++) strokeColors.push([]);
    // eslint-disable-next-line max-len
    strokeColors[0] = rendererGL.immediateMode.geometry.vertexStrokeColors.slice(-4);
    strokeColors[2] = rendererGL.curStrokeColor.slice();

    if (argLength === 4) {
      rendererGL.isQuadratic = true;

      w_x = [rendererGL.immediateMode._quadraticVertex[0], args[0], args[2]];
      w_y = [rendererGL.immediateMode._quadraticVertex[1], args[1], args[3]];

      // The ratio of the distance between the start point, the control-
      // point, and the end point determines the intermediate color.
      let d0 = Math.hypot(w_x[0]-w_x[1], w_y[0]-w_y[1]);
      let d1 = Math.hypot(w_x[1]-w_x[2], w_y[1]-w_y[2]);
      const totalLength = d0 + d1;
      d0 /= totalLength;
      for (k = 0; k < 4; k++) {
        fillColors[1].push(
          fillColors[0][k] * (1-d0) + fillColors[2][k] * d0
        );
        strokeColors[1].push(
          strokeColors[0][k] * (1-d0) + strokeColors[2][k] * d0
        );
      }

      for (i = 0; i < LUTLength; i++) {
        // Interpolate colors using control points
        rendererGL.curFillColor = [0, 0, 0, 0];
        rendererGL.curStrokeColor = [0, 0, 0, 0];
        _x = _y = 0;
        for (m = 0; m < 3; m++) {
          for (k = 0; k < 4; k++) {
            rendererGL.curFillColor[k] +=
              rendererGL._lookUpTableQuadratic[i][m] * fillColors[m][k];
            rendererGL.curStrokeColor[k] +=
              rendererGL._lookUpTableQuadratic[i][m] * strokeColors[m][k];
          }
          _x += w_x[m] * rendererGL._lookUpTableQuadratic[i][m];
          _y += w_y[m] * rendererGL._lookUpTableQuadratic[i][m];
        }
        rendererGL.vertex(_x, _y);
      }

      // so that we leave currentColor with the last value the user set it to
      rendererGL.curFillColor = fillColors[2];
      rendererGL.curStrokeColor = strokeColors[2];
      rendererGL.immediateMode._quadraticVertex[0] = args[2];
      rendererGL.immediateMode._quadraticVertex[1] = args[3];
    } else if (argLength === 6) {
      rendererGL.isQuadratic = true;

      w_x = [rendererGL.immediateMode._quadraticVertex[0], args[0], args[3]];
      w_y = [rendererGL.immediateMode._quadraticVertex[1], args[1], args[4]];
      w_z = [rendererGL.immediateMode._quadraticVertex[2], args[2], args[5]];

      // The ratio of the distance between the start point, the control-
      // point, and the end point determines the intermediate color.
      let d0 = Math.hypot(w_x[0]-w_x[1], w_y[0]-w_y[1], w_z[0]-w_z[1]);
      let d1 = Math.hypot(w_x[1]-w_x[2], w_y[1]-w_y[2], w_z[1]-w_z[2]);
      const totalLength = d0 + d1;
      d0 /= totalLength;
      for (k = 0; k < 4; k++) {
        fillColors[1].push(
          fillColors[0][k] * (1-d0) + fillColors[2][k] * d0
        );
        strokeColors[1].push(
          strokeColors[0][k] * (1-d0) + strokeColors[2][k] * d0
        );
      }

      for (i = 0; i < LUTLength; i++) {
        // Interpolate colors using control points
        rendererGL.curFillColor = [0, 0, 0, 0];
        rendererGL.curStrokeColor = [0, 0, 0, 0];
        _x = _y = _z = 0;
        for (m = 0; m < 3; m++) {
          for (k = 0; k < 4; k++) {
            rendererGL.curFillColor[k] +=
              rendererGL._lookUpTableQuadratic[i][m] * fillColors[m][k];
            rendererGL.curStrokeColor[k] +=
              rendererGL._lookUpTableQuadratic[i][m] * strokeColors[m][k];
          }
          _x += w_x[m] * rendererGL._lookUpTableQuadratic[i][m];
          _y += w_y[m] * rendererGL._lookUpTableQuadratic[i][m];
          _z += w_z[m] * rendererGL._lookUpTableQuadratic[i][m];
        }
        rendererGL.vertex(_x, _y, _z);
      }

      // so that we leave currentColor with the last value the user set it to
      rendererGL.curFillColor = fillColors[2];
      rendererGL.curStrokeColor = strokeColors[2];
      rendererGL.immediateMode._quadraticVertex[0] = args[3];
      rendererGL.immediateMode._quadraticVertex[1] = args[4];
      rendererGL.immediateMode._quadraticVertex[2] = args[5];
    }

  }
  visitCurveSegment(curveSegment, rendererGL) {
    const args = curveSegment.vertices; // Get coordinates

    let w_x = [];
    let w_y = [];
    let w_z = [];
    let t, _x, _y, _z, i;
    t = 0;
    const argLength = args.length;

    if (
      rendererGL._lookUpTableBezier.length === 0 ||
      rendererGL._lutBezierDetail !== rendererGL._pInst._curveDetail
    ) {
      rendererGL._lookUpTableBezier = [];
      rendererGL._lutBezierDetail = rendererGL._pInst._curveDetail;
      const step = 1 / rendererGL._lutBezierDetail;
      let start = 0;
      let end = 1;
      let j = 0;
      while (start < 1) {
        t = parseFloat(start.toFixed(6));
        rendererGL._lookUpTableBezier[j] = rendererGL._bezierCoefficients(t);
        if (end.toFixed(6) === step.toFixed(6)) {
          t = parseFloat(end.toFixed(6)) + parseFloat(start.toFixed(6));
          ++j;
          rendererGL._lookUpTableBezier[j] = rendererGL._bezierCoefficients(t);
          break;
        }
        start += step;
        end -= step;
        ++j;
      }
    }

    const LUTLength = rendererGL._lookUpTableBezier.length;

    if (argLength === 2) {
      rendererGL.immediateMode._curveVertex.push(args[0]);
      rendererGL.immediateMode._curveVertex.push(args[1]);
      if (rendererGL.immediateMode._curveVertex.length === 8) {
        rendererGL.isCurve = true;
        w_x = rendererGL._bezierToCatmull([
          rendererGL.immediateMode._curveVertex[0],
          rendererGL.immediateMode._curveVertex[2],
          rendererGL.immediateMode._curveVertex[4],
          rendererGL.immediateMode._curveVertex[6]
        ]);
        w_y = rendererGL._bezierToCatmull([
          rendererGL.immediateMode._curveVertex[1],
          rendererGL.immediateMode._curveVertex[3],
          rendererGL.immediateMode._curveVertex[5],
          rendererGL.immediateMode._curveVertex[7]
        ]);
        for (i = 0; i < LUTLength; i++) {
          _x =
            w_x[0] * rendererGL._lookUpTableBezier[i][0] +
            w_x[1] * rendererGL._lookUpTableBezier[i][1] +
            w_x[2] * rendererGL._lookUpTableBezier[i][2] +
            w_x[3] * rendererGL._lookUpTableBezier[i][3];
          _y =
            w_y[0] * rendererGL._lookUpTableBezier[i][0] +
            w_y[1] * rendererGL._lookUpTableBezier[i][1] +
            w_y[2] * rendererGL._lookUpTableBezier[i][2] +
            w_y[3] * rendererGL._lookUpTableBezier[i][3];
          rendererGL.vertex(_x, _y);
        }
        for (i = 0; i < argLength; i++) {
          rendererGL.immediateMode._curveVertex.shift();
        }
      }
    } else if (argLength === 3) {
      rendererGL.immediateMode._curveVertex.push(args[0]);
      rendererGL.immediateMode._curveVertex.push(args[1]);
      rendererGL.immediateMode._curveVertex.push(args[2]);
      if (rendererGL.immediateMode._curveVertex.length === 12) {
        rendererGL.isCurve = true;
        w_x = rendererGL._bezierToCatmull([
          rendererGL.immediateMode._curveVertex[0],
          rendererGL.immediateMode._curveVertex[3],
          rendererGL.immediateMode._curveVertex[6],
          rendererGL.immediateMode._curveVertex[9]
        ]);
        w_y = rendererGL._bezierToCatmull([
          rendererGL.immediateMode._curveVertex[1],
          rendererGL.immediateMode._curveVertex[4],
          rendererGL.immediateMode._curveVertex[7],
          rendererGL.immediateMode._curveVertex[10]
        ]);
        w_z = rendererGL._bezierToCatmull([
          rendererGL.immediateMode._curveVertex[2],
          rendererGL.immediateMode._curveVertex[5],
          rendererGL.immediateMode._curveVertex[8],
          rendererGL.immediateMode._curveVertex[11]
        ]);
        for (i = 0; i < LUTLength; i++) {
          _x =
            w_x[0] * rendererGL._lookUpTableBezier[i][0] +
            w_x[1] * rendererGL._lookUpTableBezier[i][1] +
            w_x[2] * rendererGL._lookUpTableBezier[i][2] +
            w_x[3] * rendererGL._lookUpTableBezier[i][3];
          _y =
            w_y[0] * rendererGL._lookUpTableBezier[i][0] +
            w_y[1] * rendererGL._lookUpTableBezier[i][1] +
            w_y[2] * rendererGL._lookUpTableBezier[i][2] +
            w_y[3] * rendererGL._lookUpTableBezier[i][3];
          _z =
            w_z[0] * rendererGL._lookUpTableBezier[i][0] +
            w_z[1] * rendererGL._lookUpTableBezier[i][1] +
            w_z[2] * rendererGL._lookUpTableBezier[i][2] +
            w_z[3] * rendererGL._lookUpTableBezier[i][3];
          rendererGL.vertex(_x, _y, _z);
        }
        for (i = 0; i < argLength; i++) {
          rendererGL.immediateMode._curveVertex.shift();
        }
      }
    }
  }
}

// Implement other visit methods for different primitives if needed


