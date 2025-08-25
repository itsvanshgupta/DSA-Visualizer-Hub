import React, { useState, useEffect } from "react";
import { Play, RefreshCcw, Search, Home, ChevronLeft, Lightbulb, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Dashboard Component ---
const Dashboard = ({ onSelectVisualizer }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-zinc-900 to-black text-white flex flex-col items-center justify-center p-6 font-inter grid-overlay overflow-hidden">
      <div className="tech-overlay" />
      <div className="sparkle-layer" />
      <div className="floating-shapes" />
      <div className="moving-particles" />
      <div className="wave-effect" />
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[40px] md:text-6xl font-extrabold text-transparent bg-clip-text gradient-text mb-8 tracking-wide text-center drop-shadow-lg"
      >
        DSA Visualizer Hub
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-300 text-lg md:text-xl mb-12 text-center max-w-2xl"
      >
        Select an algorithm category to explore interactive visualizations of fundamental Data Structures and Algorithms.
      </motion.p>

      <div className="grid grid-cols-2 gap-8 w-full max-w-5xl mt-4">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelectVisualizer("sorting")}
          className="group relative overflow-hidden rounded-[28px] h-[200px] md:h-[220px] p-8 w-full text-white shadow-[0_12px_40px_rgba(34,211,238,0.25)] transition-all duration-300 flex flex-col items-center justify-center text-2xl md:text-3xl font-extrabold leading-tight border-2 border-transparent hover:border-cyan-400 hover:shadow-[0_30px_80px_rgba(34,211,238,0.35)] outline-none focus-visible:outline-none"
          style={{ backgroundImage: 'linear-gradient(135deg, #3b82f6 0%, #9333ea 100%)' }}
        >
          <div className="mb-4 relative">
            <div className="absolute inset-0 blur-2xl rounded-full bg-cyan-400/25" />
            <div className="relative grid place-items-center w-20 h-20 rounded-full bg-cyan-400/15 shadow-xl">
              <Lightbulb size={48} className="text-cyan-200" strokeWidth={2.5} />
            </div>
          </div>
          <div className="text-center mt-1">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-100 via-cyan-200 to-sky-100 drop-shadow-sm tracking-wide text-2xl md:text-3xl">
              Sorting Algorithms
            </h3>
            <p className="mt-1 text-white/90 text-[13px] md:text-sm font-medium tracking-wide">
              Visualize comparisons, swaps and the flow of data
            </p>
            <div className="mt-2 flex items-center justify-center gap-2 text-[11px] md:text-[12px]">
              <span className="px-2.5 py-1 rounded-full bg-cyan-400/20 text-cyan-50">Quick</span>
              <span className="px-2.5 py-1 rounded-full bg-cyan-400/15 text-cyan-50">Merge</span>
              <span className="px-2.5 py-1 rounded-full bg-cyan-400/15 text-cyan-50">Heap</span>
            </div>
            <div className="mt-3 inline-flex items-center gap-2 text-cyan-50/95 text-[13px] md:text-sm font-semibold px-3 py-1.5 rounded-full bg-cyan-400/20 shadow-[0_8px_20px_rgba(34,211,238,0.25)] backdrop-blur-sm border-0">
              <span>Explore</span>
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelectVisualizer("searching")}
          className="group relative overflow-hidden rounded-[28px] h-[200px] md:h-[220px] p-8 w-full text-white shadow-[0_12px_40px_rgba(251,191,36,0.25)] transition-all duration-300 flex flex-col items-center justify-center text-2xl md:text-3xl font-extrabold leading-tight border-2 border-transparent hover:border-yellow-300 hover:shadow-[0_30px_80px_rgba(251,191,36,0.35)] outline-none focus-visible:outline-none"
          style={{ backgroundImage: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)' }}
        >
          <div className="mb-4 relative">
            <div className="absolute inset-0 blur-2xl rounded-full bg-amber-400/25" />
            <div className="relative grid place-items-center w-20 h-20 rounded-full bg-amber-400/15 shadow-xl">
              <Search size={48} className="text-amber-200" strokeWidth={2.5} />
            </div>
          </div>
          <div className="text-center mt-1">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-100 via-amber-200 to-orange-100 drop-shadow-sm tracking-wide text-2xl md:text-3xl">
              Searching Algorithms
            </h3>
            <p className="mt-1 text-white/90 text-[13px] md:text-sm font-medium tracking-wide">
              Watch the narrowing range and mid checks live
            </p>
            <div className="mt-2 flex items-center justify-center gap-2 text-[11px] md:text-[12px]">
              <span className="px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-50">Binary</span>
              <span className="px-2.5 py-1 rounded-full bg-amber-400/15 text-amber-50">Linear</span>
            </div>
            <div className="mt-3 inline-flex items-center gap-2 text-amber-50/95 text-[13px] md:text-sm font-semibold px-3 py-1.5 rounded-full bg-amber-400/20 shadow-[0_8px_20px_rgba(251,191,36,0.25)] backdrop-blur-sm">
              <span>Explore</span>
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </motion.button>
      </div>
    </div>
  );
};

// --- Sorting Visualizer Component ---
const SortingVisualizer = ({ onBackToDashboard }) => {
  const [array, setArray] = useState([]);
  const [algorithm, setAlgorithm] = useState("Bubble Sort");
  const [isSorting, setIsSorting] = useState(false);
  const [highlight, setHighlight] = useState({ i: -1, j: -1, type: null, min: -1, pivot: -1, swapI: -1, swapJ: -1 }); // More granular highlight state
  const [sortedIndex, setSortedIndex] = useState(-1);
  const [inputValue, setInputValue] = useState("");
  const [speed, setSpeed] = useState(300); // Default speed adjusted for better visibility
  const [arraySize, setArraySize] = useState(20); // Default array size adjusted for better visibility

  // Complexity Data for Sorting Algorithms
  const complexities = {
    "Bubble Sort": {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)",
      space: "O(1)",
      description: "Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. Simpler to understand but less efficient for large datasets."
    },
    "Selection Sort": {
      best: "O(n²)",
      average: "O(n²)",
      worst: "O(n²)",
      space: "O(1)",
      description: "Divides the input list into two parts: a sorted sublist and the remaining unsorted sublist. It repeatedly finds the minimum element from the unsorted sublist and puts it at the end of the sorted sublist. It performs fewer swaps than Bubble Sort but still has quadratic time complexity."
    },
    "Insertion Sort": {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)",
      space: "O(1)",
      description: "Builds the final sorted array one item at a time. It iterates through the input elements, removes one, and inserts it into the correct position in the sorted part. Efficient for small datasets or nearly sorted arrays."
    },
    "Merge Sort": {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)",
      space: "O(n)",
      description: "A divide and conquer algorithm. It divides the input array into two halves, recursively sorts the two halves, and then merges the two sorted halves. It's stable and guarantees O(n log n) performance."
    },
    "Quick Sort": {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n²)",
      space: "O(log n)",
      description: "A divide and conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot. Elements smaller than the pivot go to the left, larger to the right. Highly efficient on average, but worst-case is O(n²)."
    },
    "Heap Sort": {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)",
      space: "O(1)",
      description: "A comparison-based sorting technique based on the Binary Heap data structure. It's similar to selection sort but uses a heap to efficiently find the maximum element. It has O(n log n) time complexity and O(1) space complexity."
    },
  };

  // Utility function for delay to control visualization speed
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Function to generate a new random array
  const generateArray = (size = arraySize) => {
    const newArr = Array.from({ length: size }, () =>
      Math.floor(Math.random() * 99) + 1 // Values from 1 to 99
    );
    setArray(newArr);
    setSortedIndex(-1); // Reset sorted state
    setHighlight({ i: -1, j: -1, type: null, min: -1, pivot: -1, swapI: -1, swapJ: -1 }); // Reset highlights
    setInputValue(newArr.join(", ")); // Update input value to reflect generated array
  };

  // Effect to generate array on component mount or when arraySize changes
  useEffect(() => {
    generateArray(arraySize);
  }, [arraySize]);

  // Handle manual array input from the text field
  const handleArrayInput = (e) => {
    setInputValue(e.target.value);
    const numbers = e.target.value
      .split(",")
      .map((num) => parseInt(num.trim()))
      .filter((num) => !isNaN(num) && num > 0 && num <= 100); // Filter out invalid numbers and ensure range
    setArray(numbers.length > 0 ? numbers : [10, 20, 30, 40, 50]); // Provide a default if input is empty/invalid
    setSortedIndex(-1);
    setHighlight({ i: -1, j: -1, type: null, min: -1, pivot: -1, swapI: -1, swapJ: -1 });
  };

  // --- Sorting Algorithms Implementations (Asynchronous for Visualization) ---

  // Bubble Sort
  const bubbleSort = async (arr) => {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        // Removed: if (!isSorting) return; // This was causing the issue
        setHighlight({ i: j, j: j + 1, type: 'compare' }); // Highlight elements being compared
        await delay(speed);

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
          setArray([...arr]); // Update state to re-render
          setHighlight({ i: j, j: j + 1, type: 'swap' }); // Highlight elements after swap
          await delay(speed);
        }
      }
      setSortedIndex(len - i - 1); // Mark the largest element as sorted
    }
    return arr;
  };

  // Selection Sort
  const selectionSort = async (arr) => {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      let minIdx = i;
      setHighlight({ i: i, type: 'current', min: i }); // Highlight current position and initial min
      await delay(speed);

      for (let j = i + 1; j < len; j++) {
        // Removed: if (!isSorting) return; // This was causing the issue
        setHighlight(prev => ({ ...prev, j: j, type: 'compare' })); // Highlight element being compared with min
        await delay(speed);

        if (arr[j] < arr[minIdx]) {
          minIdx = j;
          setHighlight(prev => ({ ...prev, min: minIdx })); // Update highlighted minimum
          await delay(speed);
        }
      }
      if (minIdx !== i) {
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]; // Swap current element with minimum found
        setArray([...arr]);
        setHighlight(prev => ({ ...prev, swapI: i, swapJ: minIdx, type: 'swap' })); // Highlight swap
        await delay(speed);
      }
      setSortedIndex(i); // Mark current position as sorted
    }
    setSortedIndex(len - 1); // Mark the last element as sorted
    return arr;
  };

  // Insertion Sort
  const insertionSort = async (arr) => {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
      let current = arr[i];
      let j = i - 1;
      setHighlight({ i: i, type: 'current' }); // Highlight element to be inserted
      await delay(speed);

      while (j >= 0 && arr[j] > current) {
        // Removed: if (!isSorting) return; // This was causing the issue
        setHighlight(prev => ({ ...prev, j: j, type: 'compare' })); // Highlight element being shifted
        await delay(speed);
        arr[j + 1] = arr[j]; // Shift elements
        setArray([...arr]);
        await delay(speed);
        j--;
      }
      arr[j + 1] = current; // Insert element
      setArray([...arr]);
      setSortedIndex(i); // Elements up to i are considered sorted
      await delay(speed);
    }
    setSortedIndex(len); // Mark all elements as sorted
    return arr;
  };

  // Merge Sort (Helper function)
  const merge = async (arr, l, m, r) => {
    let n1 = m - l + 1;
    let n2 = r - m;

    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++) L[i] = arr[l + i];
    for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    let i = 0;
    let j = 0;
    let k = l;

    while (i < n1 && j < n2) {
      // Removed: if (!isSorting) return; // This was causing the issue
      setHighlight({ i: l + i, j: m + 1 + j, type: 'compare' }); // Highlight elements being merged
      await delay(speed);
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      setArray([...arr]); // Update state to re-render
      await delay(speed);
      k++;
    }

    while (i < n1) {
      // Removed: if (!isSorting) return; // This was causing the issue
      setHighlight({ i: l + i, type: 'current' }); // Highlight remaining elements
      await delay(speed);
      arr[k] = L[i];
      setArray([...arr]);
      await delay(speed);
      i++;
      k++;
    }

    while (j < n2) {
      // Removed: if (!isSorting) return; // This was causing the issue
      setHighlight({ i: m + 1 + j, type: 'current' }); // Highlight remaining elements
      await delay(speed);
      arr[k] = R[j];
      setArray([...arr]);
      await delay(speed);
      j++;
      k++;
    }
  };

  // Merge Sort
  const mergeSort = async (arr, l, r) => {
    // Removed: if (!isSorting) return; // This was causing the issue
    if (l < r) {
      let m = Math.floor(l + (r - l) / 2);

      await mergeSort(arr, l, m);
      await mergeSort(arr, m + 1, r);
      await merge(arr, l, m, r);
    }
    // Mark all elements as sorted after the main call completes
    if (l === 0 && r === array.length - 1) {
      setSortedIndex(array.length);
    }
    return arr;
  };

  // Quick Sort (Helper function)
  const partition = async (arr, low, high) => {
    let pivot = arr[high];
    let i = (low - 1);
    setHighlight({ i: high, type: 'pivot' }); // Highlight pivot element
    await delay(speed);

    for (let j = low; j <= high - 1; j++) {
      // Removed: if (!isSorting) return; // This was causing the issue
      setHighlight(prev => ({ ...prev, j: j, type: 'compare' })); // Highlight elements being compared with pivot
      await delay(speed);
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap if current element is smaller than pivot
        setArray([...arr]);
        setHighlight(prev => ({ ...prev, swapI: i, swapJ: j, type: 'swap' })); // Indicate swap
        await delay(speed);
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Place pivot in its correct position
    setArray([...arr]);
    setHighlight(prev => ({ ...prev, swapI: i + 1, swapJ: high, type: 'swap', pivot: i+1 })); // Indicate pivot placement
    await delay(speed);
    return i + 1;
  };

  // Quick Sort
  const quickSort = async (arr, low, high) => {
    // Removed: if (!isSorting) return; // This was causing the issue
    if (low < high) {
      let pi = await partition(arr, low, high); // pi is partitioning index
      await quickSort(arr, low, pi - 1); // Recursively sort elements before partition
      await quickSort(arr, pi + 1, high); // Recursively sort elements after partition
    }
    // Mark all elements as sorted after the main call completes
    if (low === 0 && high === array.length - 1) {
      setSortedIndex(array.length);
    }
    return arr;
  };

  // Heap Sort (Helper functions)
  const heapify = async (arr, n, i) => {
    let largest = i; // Initialize largest as root
    let l = 2 * i + 1; // Left child
    let r = 2 * i + 2; // Right child

    if (l < n && arr[l] > arr[largest]) {
      largest = l;
    }

    if (r < n && arr[r] > arr[largest]) {
      largest = r;
    }

    if (largest !== i) {
      // Removed: if (!isSorting) return; // This was causing the issue
      setHighlight({ i: i, j: largest, type: 'compare' }); // Highlight parent and largest child
      await delay(speed);
      [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
      setArray([...arr]);
      await delay(speed);
      await heapify(arr, n, largest); // Recursively heapify the affected sub-tree
    }
  };

  // Heap Sort
  const heapSort = async (arr) => {
    let n = arr.length;

    // Build max heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      // Removed: if (!isSorting) return; // This was causing the issue
      await heapify(arr, n, i);
    }

    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
      // Removed: if (!isSorting) return; // This was causing the issue
      setHighlight({ i: 0, j: i, type: 'compare' }); // Highlight root and last element
      await delay(speed);
      [arr[0], arr[i]] = [arr[i], arr[0]]; // Move current root to end
      setArray([...arr]);
      await delay(speed);
      setSortedIndex(i); // Mark current largest as sorted
      await heapify(arr, i, 0); // Call max heapify on the reduced heap
    }
    setSortedIndex(0); // Mark the last element (which is now at index 0) as sorted
    return arr;
  };

  // Main function to start the selected sorting algorithm
  const startSorting = async () => {
    if (isSorting) return; // Prevent multiple simultaneous sorts
    setIsSorting(true);
    setSortedIndex(-1); // Reset sorted index
    setHighlight({ i: -1, j: -1, type: null, min: -1, pivot: -1, swapI: -1, swapJ: -1 }); // Reset highlights
    let arr = [...array]; // Create a mutable copy of the array

    try {
      switch (algorithm) {
        case "Bubble Sort":
          await bubbleSort(arr);
          break;
        case "Selection Sort":
          await selectionSort(arr);
          break;
        case "Insertion Sort":
          await insertionSort(arr);
          break;
        case "Merge Sort":
          await mergeSort(arr, 0, arr.length - 1);
          break;
        case "Quick Sort":
          await quickSort(arr, 0, arr.length - 1);
          break;
        case "Heap Sort":
          await heapSort(arr);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("Sorting error:", error);
    } finally {
      setIsSorting(false); // Enable buttons after sorting
      setHighlight({ i: -1, j: -1, type: null, min: -1, pivot: -1, swapI: -1, swapJ: -1 }); // Clear final highlights
      setSortedIndex(arr.length); // Mark all as sorted when done
    }
  };

  // Reset function: stops ongoing sort and generates a new array
  const resetArray = () => {
    setIsSorting(false); // Crucially stop any ongoing sorting
    generateArray(arraySize); // Generate a new array
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-950 to-black text-white flex flex-col items-center p-6 font-inter grid-overlay overflow-hidden">
      <div className="tech-overlay" />
      <div className="sparkle-layer" />
      <div className="floating-shapes" />
      <div className="moving-particles" />
      <div className="wave-effect" />
      <div className="w-full max-w-7xl grid grid-cols-3 items-center mb-6">
        <button
          onClick={onBackToDashboard}
          className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 active:bg-gray-800 px-4 py-2 rounded-xl text-sm md:text-base font-semibold shadow-md transition-all duration-200"
          disabled={isSorting}
        >
          <ChevronLeft size={18} /> Back to Dashboard
        </button>
        <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text gradient-text tracking-wide text-center col-start-2">
          Sorting Algorithms
        </h1>
        <div></div>
      </div>
      <p className="text-center mb-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 text-lg md:text-xl tracking-wide drop-shadow">
          Visualize how different sorting algorithms organize data step-by-step.
        </span>
      </p>

      {/* Controls Section */}
      <div className="relative flex flex-wrap justify-center items-center gap-6 mb-12 bg-gray-800/60 p-6 rounded-2xl w-full max-w-6xl shadow-xl border border-gray-700 overflow-hidden">
        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-transparent" />
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
          className="bg-gray-900/80 text-white px-6 py-4 rounded-xl border border-cyan-400/30 text-base md:text-lg font-bold focus:outline-none focus:ring-2 focus:ring-cyan-400/60 backdrop-blur-sm shadow-[0_8px_30px_rgba(56,189,248,0.15)]"
          disabled={isSorting}
        >
          <option>Bubble Sort</option>
          <option>Selection Sort</option>
          <option>Insertion Sort</option>
          <option>Merge Sort</option>
          <option>Quick Sort</option>
          <option>Heap Sort</option>
        </select>

        {/* Array Size Slider */}
        <div className="flex flex-col items-center gap-2">
          <label htmlFor="arraySize" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-sky-300 text-sm md:text-base">Array Size: {arraySize}</label>
          <input
            type="range"
            id="arraySize"
            min="5"
            max="70" // Adjusted max size for better visibility with more elements
            value={arraySize}
            onChange={(e) => setArraySize(Number(e.target.value))}
            className="w-48 md:w-64 accent-cyan-400"
            disabled={isSorting}
          />
        </div>

        {/* Speed Slider */}
        <div className="flex flex-col items-center gap-2">
          <label htmlFor="speed" className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-200 to-purple-300 text-sm md:text-base">Speed: {speed}ms</label>
          <input
            type="range"
            id="speed"
            min="10" // Faster minimum speed
            max="1000"
            step="10"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-48 md:w-64 accent-fuchsia-400"
            disabled={isSorting}
          />
        </div>

        <button
          onClick={startSorting}
          disabled={isSorting || array.length === 0} // Disable if array is empty
          className="group relative flex items-center gap-2 px-6 py-3 rounded-xl text-base md:text-lg font-extrabold transition-all duration-300 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 shadow-[0_10px_30px_rgba(56,189,248,0.25)] border-2 border-transparent hover:border-cyan-300/60"
        >
          <Play size={20} /> Start
        </button>

        <button
          onClick={resetArray}
          className="group relative flex items-center gap-2 px-6 py-3 rounded-xl text-base md:text-lg font-extrabold transition-all duration-300 bg-gradient-to-r from-emerald-600 to-lime-600 hover:from-emerald-500 hover:to-lime-500 shadow-[0_10px_30px_rgba(16,185,129,0.25)] border-2 border-transparent hover:border-emerald-300/60"
          disabled={isSorting}
        >
          <RefreshCcw size={20} /> New Array
        </button>
      </div>

      {/* Input Array Box */}
      <div className="mb-12 w-full max-w-4xl">
        <div className="bg-gray-800/60 border border-gray-700 p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-bold text-gray-300 mb-3">
            Enter a Custom Array (comma-separated values, 1-100)
          </h2>
          <input
            type="text"
            value={inputValue}
            onChange={handleArrayInput}
            placeholder="e.g. 10, 3, 45, 6, 22"
            className="w-full text-center text-lg md:text-xl font-bold text-white bg-gray-900 px-6 py-4 rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            disabled={isSorting}
          />
        </div>
      </div>

      {/* Complexity Boxes and Description */}
      <div className="mb-12 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="bg-gray-800/60 border border-gray-700 p-6 rounded-2xl shadow-lg text-center lg:col-span-1">
          <h2 className="text-xl font-bold text-gray-300 mb-2">Best Case</h2>
          <p className="text-emerald-400 text-3xl font-extrabold">
            {complexities[algorithm].best}
          </p>
        </div>
        <div className="bg-gray-800/60 border border-gray-700 p-6 rounded-2xl shadow-lg text-center lg:col-span-1">
          <h2 className="text-xl font-bold text-gray-300 mb-2">Average Case</h2>
          <p className="text-yellow-400 text-3xl font-extrabold">
            {complexities[algorithm].average}
          </p>
        </div>
        <div className="bg-gray-800/60 border border-gray-700 p-6 rounded-2xl shadow-lg text-center lg:col-span-1">
          <h2 className="text-xl font-bold text-gray-300 mb-2">Worst Case</h2>
          <p className="text-red-400 text-3xl font-extrabold">
            {complexities[algorithm].worst}
          </p>
        </div>
        <div className="bg-gray-800/60 border border-gray-700 p-6 rounded-2xl shadow-lg text-center lg:col-span-1">
          <h2 className="text-xl font-bold text-gray-300 mb-2">Space Complexity</h2>
          <p className="text-purple-400 text-3xl font-extrabold">
            {complexities[algorithm].space}
          </p>
        </div>
        <div className="bg-gray-800/60 border border-gray-700 p-6 rounded-2xl shadow-lg text-center lg:col-span-5">
          <h2 className="text-xl font-bold text-gray-300 mb-2">Description</h2>
          <p className="text-gray-200 text-lg">{complexities[algorithm].description}</p>
        </div>
      </div>

      {/* Visualization Area */}
      <div className="relative w-full max-w-full">
        <div className={`pointer-events-none absolute -inset-6 rounded-3xl blur-2xl ${isSorting ? 'bg-orange-500/15' : (sortedIndex === array.length ? 'bg-emerald-500/15' : 'bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent')}`} />
        <div className="flex justify-center items-end gap-1 md:gap-2 lg:gap-3 bg-gray-800/50 backdrop-blur-md p-4 md:p-8 lg:p-10 rounded-2xl w-full overflow-x-auto min-h-[250px] md:min-h-[300px] lg:min-h-[400px] shadow-2xl relative">
        {array.length === 0 ? (
          <p className="text-gray-400 text-2xl">Please enter an array or generate a new one.</p>
        ) : (
          <AnimatePresence>
            {array.map((value, idx) => {
              // Default color (orange while sorting, blue/purple idle)
              let barColor = isSorting ? "from-orange-400 to-orange-600" : "from-blue-400 to-purple-500";
              let borderColor = "border-gray-600";
              let textColor = "text-white";

              // Highlight comparison (yellow/orange) with stripe glow
              if (highlight.type === 'compare' && (idx === highlight.i || idx === highlight.j)) {
                barColor = "from-yellow-400 to-orange-500";
                borderColor = "border-yellow-400";
                textColor = "text-white";
              }
              // Highlight current element (e.g., in insertion/selection sort, red/pink)
              if (highlight.type === 'current' && idx === highlight.i) {
                barColor = "from-red-400 to-pink-500";
                borderColor = "border-red-400";
                textColor = "text-white";
              }
              // Highlight minimum element (in selection sort, teal/cyan)
              if (highlight.type === 'min' && idx === highlight.min) {
                barColor = "from-teal-400 to-cyan-500";
                borderColor = "border-teal-400";
                textColor = "text-white";
              }
              // Highlight pivot (in quick sort, green/lime)
              if (highlight.type === 'pivot' && idx === highlight.i) {
                barColor = "from-green-400 to-lime-500";
                borderColor = "border-green-400";
                textColor = "text-white";
              }
              // Highlight swapped elements (red) with stripes
              if (highlight.type === 'swap' && (idx === highlight.swapI || idx === highlight.swapJ)) {
                 barColor = "from-red-500 to-pink-600";
                 borderColor = "border-red-500";
                 textColor = "text-white";
              }

              // Sorted elements (green/emerald). When fully sorted, make all bars green.
              if ((sortedIndex !== -1 && idx >= array.length - (array.length - sortedIndex)) || sortedIndex === array.length) {
                barColor = "from-green-400 to-emerald-600";
                borderColor = "border-green-400";
                textColor = "text-white";
              }


              return (
                <motion.div
                  key={idx + "-" + value} // Unique key for AnimatePresence
                  layout // Enables smooth transitions for array changes
                  transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }} // Smoother animation
                  className={`relative flex flex-col justify-end items-center bg-gray-900/70 ${borderColor} border-2 rounded-lg md:rounded-xl shadow-xl transition-all duration-100 ease-out`}
                  style={{
                    width: `${Math.max(20, 400 / array.length)}px`, // Responsive width, min 20px
                    height: `${(value / 100) * 150 + 50}px`, // Dynamic height based on value, min 50px
                    minHeight: "50px", // Minimum height for visibility
                  }}
                >
                  {/* Value label above the bar */}
                  <span className={`absolute top-0 -translate-y-full text-xs md:text-sm font-semibold mb-1 ${textColor}`}>
                    {value}
                  </span>
                  {/* Bar itself */}
                  <div className={`w-full h-full bg-gradient-to-t ${barColor} rounded-md ${highlight.type === 'compare' && (idx === highlight.i || idx === highlight.j) ? 'bar-stripe-yellow glow-yellow' : ''} ${highlight.type === 'swap' && (idx === highlight.swapI || idx === highlight.swapJ) ? 'bar-stripe-red glow-red' : ''} ${!isSorting && sortedIndex === array.length ? 'bar-stripe-green glow-green' : ''}`} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        )}
        </div>
      </div>
    </div>
  );
};


// --- Searching Visualizer Component ---
const SearchingVisualizer = ({ onBackToDashboard }) => {
  const [array, setArray] = useState([]);
  const [algorithm, setAlgorithm] = useState("Linear Search");
  const [target, setTarget] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [foundIndex, setFoundIndex] = useState(-1);
  const [searchMessage, setSearchMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [speed, setSpeed] = useState(300);
  const [arraySize, setArraySize] = useState(20);

  // Complexity Data for Searching Algorithms
  const complexities = {
    "Linear Search": {
      best: "O(1)",
      average: "O(n)",
      worst: "O(n)",
      space: "O(1)",
      description: "Checks each element in the list sequentially until a match is found or the whole list has been searched. Works on unsorted arrays."
    },
    "Binary Search": {
      best: "O(1)",
      average: "O(log n)",
      worst: "O(log n)",
      space: "O(1)",
      description: "Repeatedly divides the search interval in half. Requires the array to be sorted. Much faster than linear search for large datasets."
    }
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Generate a new random array
  const generateArray = (size = arraySize, sorted = false) => {
    let newArr = Array.from({ length: size }, () =>
      Math.floor(Math.random() * 99) + 1
    );
    if (sorted) {
      newArr.sort((a, b) => a - b); // Ensure sorted for Binary Search
    }
    setArray(newArr);
    setInputValue(newArr.join(", "));
    setHighlightIndex(-1);
    setFoundIndex(-1);
    setSearchMessage("");
  };

  useEffect(() => {
    // Generate sorted array by default if Binary Search is selected initially
    generateArray(arraySize, algorithm === "Binary Search");
  }, [arraySize, algorithm]); // Regenerate when size or algorithm changes

  // Handle manual array input
  const handleArrayInput = (e) => {
    setInputValue(e.target.value);
    const numbers = e.target.value
      .split(",")
      .map((num) => parseInt(num.trim()))
      .filter((num) => !isNaN(num) && num > 0 && num <= 100);
    setArray(numbers.length > 0 ? numbers : [10, 20, 30, 40, 50]);
    setHighlightIndex(-1);
    setFoundIndex(-1);
    setSearchMessage("");
  };

  // Handle target input
  const handleTargetInput = (e) => {
    setTarget(e.target.value);
  };

  // --- Searching Algorithms Implementations ---

  // Linear Search
  const linearSearch = async (arr, targetVal) => {
    for (let i = 0; i < arr.length; i++) {
      // Removed: if (!isSearching) return; // This was causing the issue
      setHighlightIndex(i); // Highlight current element
      setSearchMessage(`Checking index ${i} (value: ${arr[i]})`);
      await delay(speed);

      if (arr[i] === targetVal) {
        setFoundIndex(i); // Mark as found
        setSearchMessage(`Target ${targetVal} found at index ${i}!`);
        return;
      }
    }
    setSearchMessage(`Target ${targetVal} not found in the array.`);
    setHighlightIndex(-1); // Clear highlights
  };

  // Binary Search
  const binarySearch = async (arr, targetVal) => {
    // Check if array is sorted
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            setSearchMessage("Error: Binary Search requires a sorted array!");
            setIsSearching(false);
            return;
        }
    }

    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
      // Removed: if (!isSearching) return; // This was causing the issue
      let mid = Math.floor((low + high) / 2);
      setHighlightIndex(mid); // Highlight middle element
      setSearchMessage(`Checking middle index ${mid} (value: ${arr[mid]}). Range: [${low}, ${high}]`);
      await delay(speed);

      if (arr[mid] === targetVal) {
        setFoundIndex(mid);
        setSearchMessage(`Target ${targetVal} found at index ${mid}!`);
        return;
      } else if (arr[mid] < targetVal) {
        low = mid + 1; // Search in the right half
      } else {
        high = mid - 1; // Search in the left half
      }
    }
    setSearchMessage(`Target ${targetVal} not found in the array.`);
    setHighlightIndex(-1); // Clear highlights
  };

  // Main function to start searching
  const startSearching = async () => {
    if (isSearching) return;
    const targetVal = parseInt(target);
    if (isNaN(targetVal)) {
      setSearchMessage("Please enter a valid number as target.");
      return;
    }
    if (array.length === 0) {
      setSearchMessage("Please create an array first.");
      return;
    }

    setIsSearching(true);
    setHighlightIndex(-1);
    setFoundIndex(-1);
    setSearchMessage("Starting search...");

    try {
      switch (algorithm) {
        case "Linear Search":
          await linearSearch(array, targetVal);
          break;
        case "Binary Search":
          await binarySearch(array, targetVal);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("Searching error:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const resetSearch = () => {
    setIsSearching(false);
    generateArray(arraySize, algorithm === "Binary Search");
    setTarget("");
    setSearchMessage("");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-950 to-black text-white flex flex-col items-center p-6 font-inter grid-overlay overflow-hidden">
      <div className="tech-overlay" />
      <div className="sparkle-layer" />
      <div className="floating-shapes" />
      <div className="moving-particles" />
      <div className="wave-effect" />
      <div className="w-full max-w-7xl grid grid-cols-3 items-center mb-6">
        <button
          onClick={onBackToDashboard}
          className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 active:bg-gray-800 px-4 py-2 rounded-xl text-sm md:text-base font-semibold shadow-md transition-all duration-200"
          disabled={isSearching}
        >
          <ChevronLeft size={18} /> Back to Dashboard
        </button>
        <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text gradient-text tracking-wide text-center col-start-2">
          Searching Algorithms
        </h1>
        <div></div>
      </div>
      <p className="text-gray-300/90 text-lg md:text-xl mb-10 text-center">
        See how different searching algorithms locate elements in an array.
      </p>

      {/* Controls Section */}
      <div className="flex flex-wrap justify-center items-center gap-6 mb-12 bg-gray-800/60 p-6 rounded-2xl w-full max-w-6xl shadow-xl border border-gray-700">
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
          className="bg-gray-900 text-white px-6 py-4 rounded-xl border border-gray-600 text-base md:text-lg font-bold focus:outline-none focus:ring-2 focus:ring-orange-400"
          disabled={isSearching}
        >
          <option>Linear Search</option>
          <option>Binary Search</option>
        </select>

        {/* Array Size Slider */}
        <div className="flex flex-col items-center gap-2">
          <label htmlFor="arraySize" className="text-gray-300 text-sm md:text-base">Array Size: {arraySize}</label>
          <input
            type="range"
            id="arraySize"
            min="5"
            max="70"
            value={arraySize}
            onChange={(e) => setArraySize(Number(e.target.value))}
            className="w-48 md:w-64 accent-orange-500"
            disabled={isSearching}
          />
        </div>

        {/* Speed Slider */}
        <div className="flex flex-col items-center gap-2">
          <label htmlFor="speed" className="text-gray-300 text-sm md:text-base">Speed: {speed}ms</label>
          <input
            type="range"
            id="speed"
            min="10"
            max="1000"
            step="10"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-48 md:w-64 accent-red-500"
            disabled={isSearching}
          />
        </div>

        {/* Target Input */}
        <div className="flex flex-col items-center gap-2">
          <label htmlFor="target" className="text-gray-300 text-sm md:text-base">Target Value (1-100):</label>
          <input
            type="number"
            id="target"
            value={target}
            onChange={handleTargetInput}
            min="1"
            max="100"
            placeholder="e.g. 25"
            className="bg-gray-900 text-white px-4 py-2 rounded-xl border border-gray-600 w-24 text-center focus:outline-none focus:ring-2 focus:ring-orange-400"
            disabled={isSearching}
          />
        </div>

        <button
          onClick={startSearching}
          disabled={isSearching || array.length === 0 || target === ""}
          className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800 px-6 py-3 rounded-xl text-base md:text-lg font-extrabold shadow-md hover:shadow-lg transition-all duration-200"
        >
          <Search size={20} /> Search
        </button>

        <button
          onClick={resetSearch}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 active:bg-green-800 px-6 py-3 rounded-xl text-base md:text-lg font-extrabold shadow-md hover:shadow-lg transition-all duration-200"
          disabled={isSearching}
        >
          <RefreshCcw size={20} /> New Array
        </button>
      </div>

      {/* Input Array Box */}
      <div className="mb-12 w-full max-w-4xl">
        <div className="bg-gray-800/60 border border-gray-700 p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-bold text-gray-300 mb-3">
            Enter a Custom Array (comma-separated values, 1-100)
            {algorithm === "Binary Search" && <span className="text-yellow-400 text-sm block">(Sorted array recommended for Binary Search)</span>}
          </h2>
          <input
            type="text"
            value={inputValue}
            onChange={handleArrayInput}
            placeholder="e.g. 10, 3, 45, 6, 22"
            className="w-full text-center text-lg md:text-xl font-bold text-white bg-gray-900 px-6 py-4 rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            disabled={isSearching}
          />
        </div>
      </div>

      {/* Complexity Boxes and Description */}
      <div className="mb-12 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="bg-gray-800/60 border border-gray-700 p-6 rounded-2xl shadow-lg text-center lg:col-span-1">
          <h2 className="text-xl font-bold text-gray-300 mb-2">Best Case</h2>
          <p className="text-emerald-400 text-3xl font-extrabold">
            {complexities[algorithm].best}
          </p>
        </div>
        <div className="bg-gray-800/60 border border-gray-700 p-6 rounded-2xl shadow-lg text-center lg:col-span-1">
          <h2 className="text-xl font-bold text-gray-300 mb-2">Average Case</h2>
          <p className="text-yellow-400 text-3xl font-extrabold">
            {complexities[algorithm].average}
          </p>
        </div>
        <div className="bg-gray-800/60 border border-gray-700 p-6 rounded-2xl shadow-lg text-center lg:col-span-1">
          <h2 className="text-xl font-bold text-gray-300 mb-2">Worst Case</h2>
          <p className="text-red-400 text-3xl font-extrabold">
            {complexities[algorithm].worst}
          </p>
        </div>
        <div className="bg-gray-800/60 border border-gray-700 p-6 rounded-2xl shadow-lg text-center lg:col-span-1">
          <h2 className="text-xl font-bold text-gray-300 mb-2">Space Complexity</h2>
          <p className="text-purple-400 text-3xl font-extrabold">
            {complexities[algorithm].space}
          </p>
        </div>
        <div className="bg-gray-800/60 border border-gray-700 p-6 rounded-2xl shadow-lg text-center lg:col-span-5">
          <h2 className="text-xl font-bold text-gray-300 mb-2">Description</h2>
          <p className="text-gray-200 text-lg">{complexities[algorithm].description}</p>
        </div>
      </div>

      {/* Visualization Area */}
      <div className="relative w-full max-w-full">
        <div className={`pointer-events-none absolute -inset-6 rounded-3xl blur-2xl ${isSearching ? 'bg-orange-500/15' : (foundIndex !== -1 ? 'bg-emerald-500/15' : 'bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent')}`} />
        <div className="flex justify-center items-end gap-1 md:gap-2 lg:gap-3 bg-gray-800/50 backdrop-blur-md p-4 md:p-8 lg:p-10 rounded-2xl w-full overflow-x-auto min-h-[250px] md:min-h-[300px] lg:min-h-[400px] shadow-2xl relative">
        {array.length === 0 ? (
          <p className="text-gray-400 text-2xl">Please enter an array or generate a new one.</p>
        ) : (
          <AnimatePresence>
            {array.map((value, idx) => {
              // Default state: orange while searching, blue/purple idle
              let barColor = isSearching ? "from-orange-400 to-orange-600" : "from-blue-400 to-purple-500";
              let borderColor = "border-gray-600";
              let textColor = "text-white";

              if (idx === highlightIndex) {
                barColor = "from-yellow-400 to-orange-500"; // Currently checking
                borderColor = "border-yellow-400";
                textColor = "text-white";
              }
              if (idx === foundIndex || (foundIndex !== -1)) {
                barColor = "from-green-400 to-emerald-600"; // Found target or after found, all green
                borderColor = "border-green-400";
                textColor = "text-white";
              }

              return (
                <motion.div
                  key={idx + "-" + value}
                  layout
                  transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                  className={`relative flex flex-col justify-end items-center bg-gray-900/70 ${borderColor} border-2 rounded-lg md:rounded-xl shadow-xl transition-all duration-100 ease-out`}
                  style={{
                    width: `${Math.max(20, 400 / array.length)}px`,
                    height: `${(value / 100) * 150 + 50}px`,
                    minHeight: "50px",
                  }}
                >
                  <span className={`absolute top-0 -translate-y-full text-xs md:text-sm font-semibold mb-1 ${textColor}`}>
                    {value}
                  </span>
                  <div className={`w-full h-full bg-gradient-to-t ${barColor} rounded-md ${idx === highlightIndex ? 'bar-stripe-yellow glow-yellow' : ''} ${foundIndex !== -1 ? 'bar-stripe-green glow-green' : ''}`} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        )}
        </div>
      </div>

      {/* Search Message */}
      <div className="mt-8 bg-gray-800/60 p-4 rounded-xl shadow-lg border border-gray-700 w-full max-w-xl text-center">
        <p className="text-xl font-bold text-cyan-400">{searchMessage}</p>
      </div>
    </div>
  );
};


// --- Main App Component ---
export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard"); // 'dashboard', 'sorting', 'searching'

  const handleSelectVisualizer = (visualizer) => {
    setCurrentPage(visualizer);
  };

  const handleBackToDashboard = () => {
    setCurrentPage("dashboard");
  };

  return (
    <div className="font-inter">
      {currentPage === "dashboard" && <Dashboard onSelectVisualizer={handleSelectVisualizer} />}
      {currentPage === "sorting" && <SortingVisualizer onBackToDashboard={handleBackToDashboard} />}
      {currentPage === "searching" && <SearchingVisualizer onBackToDashboard={handleBackToDashboard} />}
    </div>
  );
}

