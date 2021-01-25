redux probably creates it's own list of
states. When reducers are combined, states
that are being retuned may have same names
in two different reducers. That state is 
probably included in the state's list once
which is stored in the store.
Somehow redux creates an subscriber list to
each state.
Only thing that I can think of is that it adds
components to the subscribers list one-by-one 
when connect is used on that state by some component.
more research is needed...indeed....
