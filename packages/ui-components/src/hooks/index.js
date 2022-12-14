import React, { useCallback, useEffect, useRef, useState } from 'react';

export const useDynamicSVGImport = (path, name, fileName, options = {}) => {
  const SvgRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error] = useState();

  const { onCompleted, onError } = options;
  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        SvgRef.current = (
          await import(`!@svgr/webpack!../assets/icons/${name}/${fileName}.svg`)
        ).default;
        setLoading(false);
        if (onCompleted) {
          onCompleted(name, fileName, SvgRef.current);
        }
      } catch (err) {
        if (onError) {
          onError(err);
        }
      }
    };
    importIcon();
  }, [name, fileName, onCompleted, onError]);

  return { error, loading, SvgIcon: SvgRef.current || (() => <div />) };
};

export const useFetch = (fetch, token, params = {}, fetchArguments, preventLoad) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState(JSON.stringify(params));

  const load = useCallback(async () => {
    if (preventLoad && preventLoad()) return;

    setLoading(true);
    try {
      const newParams = [
        ...(token ? token : []),
        ...(fetchArguments ? fetchArguments : []),
        params,
      ];

      const { data } = await fetch(...newParams);
      setData(data);
    } catch (err) {
      console.error(err);
      setError(err);
    }
    setLoading(false);
  }, [inputs]);

  useEffect(() => {
    load();
  }, [inputs]);

  useEffect(() => {
    const values = JSON.stringify(params);
    if (values !== JSON.stringify(inputs)) {
      setInputs(values);
    }
  }, [params]);

  return [data, loading, error, load];
};
