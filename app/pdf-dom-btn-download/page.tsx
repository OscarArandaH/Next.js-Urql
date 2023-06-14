'use client'

import { PDFDownloadLink } from "@react-pdf/renderer";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react"

const InvoicePDF = dynamic(() => import("./pdf1"), {
  ssr: false,
});

const View = () => {
  const [client, setClient] = useState(false)
  useEffect(() => {
    setClient(true)
  }, [])
  return(
    <InvoicePDF/>
  )
}

export default View