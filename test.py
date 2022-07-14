import itertools


t = int(input())
[n, m] = list(map(int, input().split()))

for i in range(t):
    a = list(map(int, input().split()))
    print(list(itertools.combinations(a, m)))
    print(a)


print(t, n, m)
