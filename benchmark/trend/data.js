window.BENCHMARK_DATA = {
  "lastUpdate": 1641326708475,
  "repoUrl": "https://github.com/aws-observability/aws-otel-collector",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "sethAmazon",
            "username": "sethAmazon",
            "email": "81644108+sethAmazon@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f57ae1bc811622cc0ec86ae0dd096fcf9e7e1b4b",
          "message": "Remove version filter and trigger performance tests on all passing runs (#842)",
          "timestamp": "2022-01-03T20:56:28Z",
          "url": "https://github.com/aws-observability/aws-otel-collector/commit/f57ae1bc811622cc0ec86ae0dd096fcf9e7e1b4b"
        },
        "date": 1641326707403,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "logzio_exporter_trace_mock",
            "value": "3.70",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "89.18",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "6.29",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "72.07",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "3.88",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "71.02",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_trace",
            "value": "4.06",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_trace",
            "value": "71.80",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "3.18",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "69.51",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "4.71",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "141.62",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3.77",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "129.18",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "2.36",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "75.18",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "5.57",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "77.92",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "3.61",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "84.03",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "25.33",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "85.90",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "28.93",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "458.96",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "33.18",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "74.23",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "34.16",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "579.24",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "28.50",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "661.41",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_trace",
            "value": "35.86",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_trace",
            "value": "77.83",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "28.39",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "101.91",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "32.76",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "76.31",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "27.65",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "71.60",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.82",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "152.34",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "28.55",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "495.05",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_trace",
            "value": "167.07",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_trace",
            "value": "12132.93",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "105.16",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "123.67",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.97",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "169.14",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "54.02",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "1044.25",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "124.05",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3032.34",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "104.55",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "91.97",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "121.70",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "76.69",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "140.71",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "13436.02",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "131.67",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "82.44",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "7.87",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "256.43",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "59.30",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "59.78",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd",
            "value": "25.83",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd",
            "value": "68.83",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "59.82",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_static",
            "value": "8.08",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_static",
            "value": "258.53",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric",
            "value": "58.81",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "60.19",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "60.01",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "60.27",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_static",
            "value": "0.13",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_static",
            "value": "72.42",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "0.13",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "72.59",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "60.79",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "59.62",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "61.09",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "59.95",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.01",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "59.91",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "58.32",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd",
            "value": "0.56",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd",
            "value": "67.37",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_metric",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_metric",
            "value": "58.77",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "60.00",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "58.89",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "60.98",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "58.67",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "62.48",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_static",
            "value": "1.30",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_static",
            "value": "116.67",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric",
            "value": "0.08",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric",
            "value": "59.66",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "statsd",
            "value": "5.17",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd",
            "value": "68.96",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "59.89",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "1.31",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "115.16",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          }
        ]
      }
    ]
  }
}