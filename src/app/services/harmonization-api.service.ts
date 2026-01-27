import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HarmonizationPair {
    source: string;
    target: string;
}

export interface HarmonizeParams {
    data_file_path: string;
    rules_file_path: string;
    replay_log_file_path: string;
    output_file_path: string;
    mode: 'pairs' | 'all';
    pairs?: HarmonizationPair[];
    overwrite?: boolean;
}

export interface RpcRequest {
    method: string;
    params: HarmonizeParams | { job_id: string };
}

export interface RpcResponse {
    status: string;
    result?: any;
    error?: any;
    job_id?: string;
}

@Injectable({
    providedIn: 'root'
})
export class HarmonizationApiService {
    private http = inject(HttpClient);
    // Assuming the backend is running on localhost:8000. 
    // This should ideally be in environment config, but hardcoding for this task as requested.
    private apiUrl = 'http://localhost:8000/api';

    harmonize(params: HarmonizeParams): Observable<RpcResponse> {
        const request: RpcRequest = {
            method: 'harmonize',
            params: params
        };
        return this.http.post<RpcResponse>(this.apiUrl, request);
    }

    getJob(jobId: string): Observable<RpcResponse> {
        const request: RpcRequest = {
            method: 'get_job',
            params: { job_id: jobId }
        };
        return this.http.post<RpcResponse>(this.apiUrl, request);
    }
}
