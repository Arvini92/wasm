#define NUM_VALS 8

int first_array[NUM_VALS];
int second_array[NUM_VALS];

int dot_product() {
  
  int product = 0;
  
  for(int i=0; i<NUM_VALS; i++) {
    product += first_array[i] * second_array[i];
  }
  return product;
}

int* getFirstOffset() {
  return &first_array[0]; 
}

int* getSecondOffset() {
  return &second_array[0]; 
}