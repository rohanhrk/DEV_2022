public static long sum(int[] arr, int[][] queries) {
    long sum = 0;
    long mod = (int)1e9 + 7;
    for(int[] q : queries) {
        int st = q[0], jump = q[1];
        for(int i = st; i < arr.length; i += jump) {
            sum = (sum % mod + arr[i] % mod) % mod;
        }
    }

    return sum;
}