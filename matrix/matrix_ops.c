int i, j, k;
float data[256];

// Perform matrix-scalar multiplication
void scalarMult(int mat, float k, int out) {

  float* input = data + mat;
  float* output = data + out;
  
  // Multiply each element of the matrix by the scalar
  for(i=0; i<16; i++) {
    output[i] = input[i] * k;
  }
}

// Perform matrix-vector multiplication
void vectorMult(int mat, int vec, int out) {

  float* input = data + mat;
  float* v = data + vec;
  float* output = data + out;
  
  // Multiply each row of the matrix by the vector
  for(i=0; i<4; i++) {
    output[i] = 0.0;
    for(j=0; j<4; j++) {
      output[i] += input[4*i+j] * v[j];
    }
  }
}

// Perform matrix-matrix multiplication
void matrixMult(int mat1, int mat2, int out) {

  float* m1 = data + mat1;
  float* m2 = data + mat2;
  float* output = data + out;
  
  // Multiply the rows of m1 by the columns of m2
  for(i=0; i<4; i++) {
    for(j=0; j<4; j++) {
      output[4*i+j] = 0.0;
      for(k=0; k<4; k++) {
        output[4*i+j] += m1[4*i+k] * m2[4*k+j];
      }
    }
  }
}

// Return the offset of the data array
float* getOffset() {
  return &data[0];
}