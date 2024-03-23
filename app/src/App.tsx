import ReactFlow, { Background, Controls } from 'reactflow'
import 'reactflow/dist/style.css'
import { useFlowStore } from './states'

function App() {
  const { nodes, edges, onConnect, onNodesChange, onEdgesChange } = useFlowStore()
  return (
    <div style={{ height: '100vh', width: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default App
