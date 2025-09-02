import { useEffect, useState } from "react"
import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { Cpu } from "lucide-react"
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

function generateMetric() {
  return Math.floor(Math.random() * 100)
}

export default function PerformanceBenchmarker() {
  const [metrics, setMetrics] = useState<{ time: number; cpu: number; memory: number }[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => [
        ...prev.slice(-19),
        { time: Date.now(), cpu: generateMetric(), memory: generateMetric() },
      ])
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-card">
        <div className="flex items-center space-x-2">
          <Cpu className="h-5 w-5 text-primary" />
          <span className="font-semibold">Performance Benchmarker</span>
        </div>
        <div className="text-xs text-muted-foreground">Live System Metrics</div>
      </div>

      {/* Chart Area */}
      <div className="flex-1 p-4">
        <Card className="h-full p-4 border-border">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={metrics}>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
              <XAxis
                dataKey="time"
                tickFormatter={(t) => new Date(t).toLocaleTimeString().split(" ")[0]}
                minTickGap={20}
              />
              <YAxis domain={[0, 100]} />
              <Tooltip
                labelFormatter={(t) => new Date(t).toLocaleTimeString()}
                formatter={(value, name) => [`${value}%`, name]}
              />
              <Line type="monotone" dataKey="cpu" stroke="#4f46e5" strokeWidth={2} dot={false} name="CPU" />
              <Line type="monotone" dataKey="memory" stroke="#10b981" strokeWidth={2} dot={false} name="Memory" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  )
}
