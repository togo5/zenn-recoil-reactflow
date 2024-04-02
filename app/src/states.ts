import { Connection, Edge, EdgeChange, Node, NodeChange, addEdge, applyEdgeChanges, applyNodeChanges } from 'reactflow'
import { atom, useRecoilCallback, useRecoilValue } from 'recoil'

const nodesState = atom<Node[]>({
  key: 'states.nodesState',
  default: [
    {
      id: '1',
      data: { label: 'Hello' },
      position: { x: 0, y: 0 },
      type: 'input',
    },
    {
      id: '2',
      data: { label: 'World' },
      position: { x: 100, y: 100 },
    },
  ],
})

const edgesState = atom<Edge[]>({
  key: 'states.edgesState',
  default: [{ id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' }],
})

export const useFlowStore = () => {
  return {
    nodes: useRecoilValue(nodesState),
    edges: useRecoilValue(edgesState),
    onConnect: useRecoilCallback(
      ({ set }) =>
        (connection: Connection) => {
          set(edgesState, (edges) => addEdge(connection, edges))
        },
      []
    ),
    onNodesChange: useRecoilCallback(
      ({ set }) =>
        (changes: NodeChange[]) => {
          set(nodesState, (nodes) => applyNodeChanges(changes, nodes))
        },
      []
    ),
    onEdgesChange: useRecoilCallback(
      ({ set }) =>
        (changes: EdgeChange[]) => {
          set(edgesState, (edges) => applyEdgeChanges(changes, edges))
        },
      []
    ),
  }
}
