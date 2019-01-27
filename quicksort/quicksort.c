#define swap(x,y) { x = x + y; y = x - y; x = x - y; }

int input[16];

void quicksort(int low, int high) {

  int pivot, left, right, temp;

  if(low < high) {

    pivot = low; // Select a pivot
    left = low;
    right = high;

    while(left < right) {

      // increment i till you get a number greater than the pivot element
      while(input[left] <= input[pivot] && left <= high) left++;

      // decrement j till you get a number less than the pivot element
      while(input[right] > input[pivot] && right >= low) right--;

      // if i < j replace the elements in locations i and j
      if(left < right) {
        swap(input[left], input[right])
      }
    }
    
    // Replace the pivot element with the right element
    swap(input[right], input[pivot])

    // Call quicksort for the two partitions
    quicksort(low, right-1);
    quicksort(right+1, high);
  }
}

int* getOffset() {
  return &input[0];
}